<!DOCTYPE html>
<html>
<head>
    <title>Survey Creator for Knockout</title>

    <meta charset="utf-8">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/knockout/build/output/knockout-latest.js"></script>

    <link href="{{ asset('vendor/survey-manager/css/defaultV2.css') }}" type="text/css" rel="stylesheet">
    <script src="{{ asset('vendor/survey-manager/js/survey.core.min.js') }}"></script>
    <script src="{{ asset('vendor/survey-manager/js/survey-knockout-ui.min.js') }}"></script>

    <link href="{{ asset('vendor/survey-manager/css/survey-creator-core.min.css') }}" type="text/css" rel="stylesheet">
    <script src="{{ asset('vendor/survey-manager/js/survey-creator-core.min.js') }}"></script>
    <script src="{{ asset('vendor/survey-manager/js/survey-creator-knockout.min.js') }}"></script>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <style>
        .primary_btn {
            position: absolute;
            top: 25px;
            z-index: 999;

            text-align: center;
            width: 100px;
            height: 35px;
            color: #19b394;
            background-color: #fff;
            cursor: pointer;
            border: 2px solid #19b394;
            border-radius: 32px;
        }

        .save_survey_btn {
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
        }

        .back_to_list {
            margin-left: auto;
            margin-right: auto;
            left: 300px;
            right: 0;
        }
    </style>
    <script type="text/javascript" src="{{ asset('vendor/survey-manager/js/create_survey.js') }}"></script>

</head>
<body>
<button class="primary_btn save_survey_btn" id="save_survey_btn">Save survey</button>
<a href="{{ route('survey.admin.index') }}">
    <button class="primary_btn back_to_list">Back to list</button>
</a>
<div id="surveyCreator" style="height: 100vh;"></div>
<input type="hidden" value="{{ $survey->id }}" name="survey_id" id="survey_id">
<input type="hidden" value="{{ json_encode($survey->json) }}" name="survey_json" id="survey_json">
</body>
</html>