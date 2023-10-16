$(document).ready(function() {
    const surveyId = $('#survey_id').val();
    const creatorOptions = {
        showLogicTab: true,
        isAutoSave: true
    };

    const defaultJson = {
        pages: [{
            name: "Name",
            elements: [{
                name: "FirstName",
                title: "Enter your first name:",
                type: "text"
            }, {
                name: "LastName",
                title: "Enter your last name:",
                type: "text"
            }]
        }]
    };
    let surveyJson = $('#survey_json').val();
    console.log(surveyJson);
    if (surveyJson == '{}') {
        surveyJson = JSON.stringify(defaultJson);
    }
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);
    creator.text = window.localStorage.getItem("survey-json-" + surveyId) || surveyJson;
    creator.saveSurveyFunc = (saveNo, callback) => {
        window.localStorage.setItem("survey-json-" + surveyId, creator.text);
        callback(saveNo, true);
    };

    creator.render("surveyCreator");

    $('#save_survey_btn').click(function () {
            saveSurveyJson(
                "/admin/survey/create/" + surveyId,
                creator.JSON
            );
        }
    )

    function saveSurveyJson(url, json) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

            },
            body: JSON.stringify(json)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert(data.message);
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    }
})


