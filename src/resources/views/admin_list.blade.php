<!doctype html>
<html lang="{{app()->getLocale()}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Survey List</title>
    <style>
        table, th, td {
            border:1px solid black;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>List of all survey</h1>
    <form action="{{ route('survey.admin.create_new') }}" method="post">
        @csrf
        <input type="text" placeholder="Name of new survey" name="name">
        <input type="hidden" name="json" value="{}">
        <input type="submit" value="Submit">
    </form>
    @if(session()->has('message'))
    <h2>
        {{ session()->get('message') }}
    </h2>
    @endif
    <div class="container">
        @if(count($surveys) >0)
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Created at</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tbody>

            @foreach ($surveys as $row)
            <tr>
                <td>{{ $row -> id }}</td>
                <td>{{ $row -> name }}</td>
                <td>{{ $row -> slug }}</td>
                <td>{{ $row -> created_at }}</td>
                <td>
                    <a href="{{ route('survey.show_create', ['id' => $row->id]) }}">
                        <button>
                            Edit survey
                        </button>
                    </a>
                </td>
                <td>
                    @if($row->json !== "{}" && count($row->results) > 0)
                    <a href="{{ route('survey.results.list', ['id' => $row->id]) }}">
                        <button>
                            Show results
                        </button>
                    </a>
                    @endif
                </td>
                <td>
                    @if($row->json !== "{}" && count($row->results) > 0)
                    <a href="{{ route('survey.dashboard', ['id' => $row->id]) }}">
                        <button>
                            Show dashboard
                        </button>
                    </a>
                    @endif
                </td>
                <td>
                    <a href="{{ route('survey.delete', ['id' => $row->id]) }}">
                        <button>
                            Delete survey
                        </button>
                    </a>
                </td>
            </tr>
            @endforeach
            </tbody>
        </table>
        @else
        <h2>Currently no survey</h2>
        @endif
    </div>
</div>
</body>
</html>