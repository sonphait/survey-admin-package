<!doctype html>
<html lang="{{app()->getLocale()}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Survey Results List</title>
    <style>
        table, th, td {
            border:1px solid black;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="container">
        <table>
            <tr>
                <th>ID</th>
                <th>Created at</th>
                <th>
                    <a href="{{ route('survey.admin.index') }}">
                        <button>
                            Return to list survey
                        </button>
                    </a>
                </th>
            </tr>
            <tbody>

            @foreach ($surveyResults as $row)
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
    </div>
</div>
</body>
</html>