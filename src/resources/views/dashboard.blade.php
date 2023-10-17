<!DOCTYPE html>
<html>
<head>
    <title>Survey Creator for Knockout</title>

    <meta charset="utf-8">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- ... -->
    <script type="text/javascript" src="https://unpkg.com/knockout/build/output/knockout-latest.js"></script>

    <!-- SurveyJS Form Library resources -->
    <script type="text/javascript" src="https://unpkg.com/survey-core/survey.core.min.js"></script>

    <!-- Third-party visualization libraries -->
    <script src="https://unpkg.com/plotly.js-dist-min/plotly.min.js"></script>
     <script src="https://unpkg.com/wordcloud/src/wordcloud2.js"></script>

    <!-- SurveyJS Dashboard resources-->
    <link href="https://unpkg.com/survey-analytics/survey.analytics.min.css" rel="stylesheet">
    <script src="https://unpkg.com/survey-analytics/survey.analytics.min.js"></script>
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

        .back_to_list {
            margin-left: auto;
            margin-right: auto;
            left: 0px;
            right: 0;
        }
    </style>
    <script type="text/javascript" src="{{ asset('vendor/survey-manager/js/dashboard.js') }}"></script>

</head>
<body>
<a href="{{ route('survey.admin.index') }}">
    <button class="primary_btn back_to_list">Back to list</button>
</a>
<div id="surveyVizPanel"></div>
<input type="hidden" value="{{ json_encode($survey->json) }}" name="survey_json" id="survey_json">
<input type="hidden" value="{{ json_encode($resultsJson) }}" name="result_json" id="result_json">
</body>
</html>