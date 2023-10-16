<!DOCTYPE html>
<html>
<head>
    <title>Survey results list</title>

    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('vendor/survey-manager/js/result_detail.js') }}"></script>
    <link href="{{ asset('vendor/survey-manager/css/defaultV2.css') }}" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="{{ asset('vendor/survey-manager/js/survey.jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/survey-manager/js/survey.i18n.min.js') }}"></script>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <style>
        .primary_btn {
            position: absolute;
            top: 15px;
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

        .back_to_list {
            margin-left: auto;
            margin-right: auto;
            left: 0px;
            right: 0;
        }
    </style>

</head>
<body>
<a href="{{ route('survey.results.list', ['id' => $result->survey->id]) }}">
    <button class="primary_btn back_to_list">Back to list</button>
</a>
<div id="surveyVizPanel"></div>
<input type="hidden" value="{{ json_encode($result->json) }}" name="result_json" id="result_json">
<input type="hidden" value="{{ json_encode($result->survey->json) }}" name="survey_json" id="survey_json">
</body>
</html>