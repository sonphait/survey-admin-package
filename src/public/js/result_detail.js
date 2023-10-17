
$(document).ready(function() {
    const resultJson = $('#result_json').val();
    const surveyJson = $('#survey_json').val();

    const survey = new Survey.Model(surveyJson);
    survey.data =  JSON.parse(resultJson);

    //only show the user's answer, can't do the survey
    survey.mode = "display";
    survey.questionsOnPageMode = "singlePage";
    survey.showNavigationButtons = "none";
    survey.showProgressBar = "off";
    survey.showTimerPanel = "none";

    const pdfDocOptions = {
        fontSize: 12
    };

    const savePdf = function (surveyData) {
        const surveyPdf = new SurveyPDF.SurveyPDF(surveyJson, pdfDocOptions);
        surveyPdf.data = surveyData;
        surveyPdf.save();
    };

    survey.addNavigationItem({
        id: "pdf-export",
        title: "Save as PDF",
        action: () => savePdf(survey.data)
    });

    $(function() {
        $("#surveyVizPanel").Survey({ model: survey });
    });
})


