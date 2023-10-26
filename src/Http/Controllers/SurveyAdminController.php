<?php

namespace Sonphait\SurveyAdmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
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
            'surveys' => Survey::with('results')->get()
        ]);
    }

    public function createNew(Request $request) {
        try {
            Survey::create($request->all());
            $message = "Created successfully!";
        } catch (Exception $e) {
            Log::error('ERROR_CREATE_NEW_SURVEY:' . $e->getMessage());
            $message = "Create survey failed!";
        }
        return redirect()->route('survey.admin.index', ['surveys' => Survey::all()])->with('message', $message);
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
        } catch (Exception $e) { // Anything that went wrong
            Log::error('ERROR_EDIT_SURVEY:' . $e->getMessage());
            return response()->json([
                'message'   =>  $e,
            ], 500);
        }
    }

    public function delete_survey($id)
    {
        $survey = Survey::findOrFail($id);
        try {
            $survey->delete();
        } catch (Exception $e) {
            Log::error('ERROR_DELETE_SURVEY:' . $e->getMessage());
            return redirect()->back()->with('message', 'SOME ERRORS HAPPENED!');
        }
        return redirect()->back()->with('message', 'IT WORKS!');
    }

    public function result_list($id)
    {
        $survey = Survey::with(['results' => function ($q){
            $q->orderBy('created_at');
        }])->findOrFail($id);
        return view('survey-manager::result_list', ['survey' => $survey]);
    }

    public function result_detail($id)
    {
        $result = SurveyResult::with('survey')->findOrFail($id);
        return view('survey-manager::result_detail', ['result' => $result]);
    }

    public function dashboard($id)
    {
        $surveys = Survey::with('results')->findOrFail($id);
        $resultsJson = [];
        foreach ($surveys->results as $result) {
            $resultsJson[] = $result->json;
        }
        return view('survey-manager::dashboard', ['survey' => $surveys, 'resultsJson' => $resultsJson]);
    }

    public function upload(Request $request) {
        $images = $request->all();
        foreach ($images as $key => $image) {
            if ($image->getSize()/1024 > config('survey-manager.max_upload_file_size')  || $image->getType() != "file" ) {
                Log::error('ERROR_VALIDATE_IMAGE_UPLOAD:', ['image' => $image]);
                return response()->json([
                    'message'   =>  'image is not valid',
                ], 500);
            }
            $name = $image->getClientOriginalName();
            $imageName = time()."_".pathinfo($name,PATHINFO_FILENAME).'.'.$image->extension();

            if (config('survey-manager.upload_to_S3')) {
                //use S3 to store files
                $filePath = 'admin_files/' . $imageName;
                try {
                    Storage::disk('s3')->put($filePath, file_get_contents($image));
                    $images[$key] = config('survey-manager.admin_s3_url')."admin_files/".$imageName;
                } catch (Exception $e) {
                    Log::error('ERROR_S3_UPLOAD_FILE_ADMIN:' . $e->getMessage());
                    return response()->json([
                        'message'   =>  $e,
                    ], 500);
                }
            } else {
                //store files in local
                $image->move(public_path('images'), $imageName);
                $images[$key] = config('survey-manager.admin_domain')."images/".$imageName;
            }
        }
        return $images;
    }
}
