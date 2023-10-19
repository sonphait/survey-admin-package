<!doctype html>
<html lang="{{app()->getLocale()}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('vendor/survey-manager/js/result_list.js') }}"></script>
    <link href="https://unpkg.com/survey-jquery/defaultV2.min.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="https://unpkg.com/survey-jquery/survey.jquery.min.js"></script>

    <!-- jsPDF library -->
    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>

    <!-- SurveyJS PDF Generator library -->
    <script src="https://unpkg.com/survey-pdf/survey.pdf.min.js"></script>
    <title>Survey Results List</title>
    <style>
        table, th, td {
            border:1px solid black;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="container">.
        <h1>Result list of survey {{$survey->name}}</h1>
        <a href="{{ route('survey.admin.index') }}">
            <button>
                Return to list survey
            </button>
        </a>
        @if($survey->json !== "{}" && count($survey->results) > 0)
        <table>
            <tr>
                <th>ID</th>
                <th>Created at</th>
                <th>
                    <button class="export_pdf_btn" id="export_pdf_btn">Export survey</button>
                    <input type="hidden" value="{{ json_encode($survey->json) }}" id="survey_json">
                </th>
            </tr>
            <tbody>

            @foreach ($survey->results as $row)
            <tr>
                <td>{{ $row -> id }}</td>
                <td>{{ $row -> created_at }}</td>
                <td>
                    <a href="{{ route('survey.results.detail', ['id' => $row->id]) }}">
                        <button>
                            Show result
                        </button>
                    </a>
                </td>
            </tr>
            @endforeach
            </tbody>
        </table>
        @else
        <h2>No result found!</h2>
        @endif
    </div>
</div>
</body>
</html>