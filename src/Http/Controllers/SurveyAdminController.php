<?php

namespace Sonphait\SurveyAdmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Sonphait\SurveyAdmin\Models\Survey;
use Sonphait\SurveyAdmin\Models\SurveyResult;

class SurveyAdminController extends Controller
{
    /**
     * Show all available survey.
     */
    public function index()
    {
        return view('survey-manager::admin_list', [
            'surveys' => Survey::all()
        ]);
    }

    public function createNew(Request $request) {
        $survey = Survey::create($request->all());
        return redirect()->route('survey.admin.index', ['surveys' => Survey::all()]);
    }

    public function showCreate($id)
    {
        $survey = Survey::findOrFail($id);

        return view('survey-manager::create', ['survey' => $survey]);
    }

    public function create_content(Request $request, $id)
    {
        try {
            $affectedRows = Survey::where("id", $id)->update(["json" => $request->all()]);
            return response()->json([
                'data'      =>  $affectedRows,
                'message'   =>  'Survey Result successfully created',
            ], 201);
        } catch (Exception $ex) { // Anything that went wrong
            return response()->json([
                'message'   =>  $ex,
            ], 500);
        }
    }

    public function delete_survey($id)
    {
        $survey = Survey::findOrFail($id);
        $survey->delete();

        return redirect()->route('survey.admin.index', ['surveys' => Survey::all()]);
    }

    public function result_list($id)
    {
        $surveyResults = SurveyResult::where('survey_id', $id)->orderBy('created_at')->get();
        return view('survey-manager::result_list', ['surveyResults' => $surveyResults]);
    }

    public function result_detail($id)
    {
        $result = SurveyResult::with('survey')->findOrFail($id);
        return view('survey-manager::result_detail', ['result' => $result]);
    }
}
