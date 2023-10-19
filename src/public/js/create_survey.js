$(document).ready(function() {
    const surveyId = $('#survey_id').val();
    const creatorOptions = {
        showLogicTab: true,
        isAutoSave: true,
        showTranslationTab: true
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
    if (surveyJson == '"{}"') {
        surveyJson = JSON.stringify(defaultJson);
    }
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);
    //change current language here
    SurveyCreator.localization.currentLocale = "en";

    //uncomment to use local when uploading image
    // creator.onUploadFile.add(function (_, options) {
    //     const formData = new FormData();
    //
    //     options.files.forEach(function (file) {
    //         formData.append(file.lastModified, file);
    //     });
    //     fetch("/admin/survey/upload", {
    //         method: "post",
    //         headers: {
    //             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //         },
    //         body: formData
    //     }).then((response) => response.json())
    //         .then((result) => {
    //             options.callback(
    //                 "success",
    //                 // A link to the uploaded file
    //                 result[options.files[0].lastModified]
    //             );
    //         })
    //         .catch((error) => {
    //             options.callback('error');
    //         });
    // });

    creator.text = window.localStorage.getItem("survey-json-" + surveyId) || surveyJson;
    creator.saveSurveyFunc = (saveNo, callback) => {
        window.localStorage.setItem("survey-json-" + surveyId, creator.text);
        callback(saveNo, true);
    };

    creator.render("surveyCreator");

    //save survey to database when click save button
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


