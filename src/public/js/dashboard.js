$(document).ready(function() {
    const surveyJson = $('#survey_json').val();
    const surveyResults =  JSON.parse($('#result_json').val());

    const survey = new Survey.Model(surveyJson);

    const vizPanelOptions = {
        allowHideQuestions: false
    }

    const vizPanel = new SurveyAnalytics.VisualizationPanel(
        survey.getAllQuestions(),
        surveyResults,
        vizPanelOptions
    );

    vizPanel.render("surveyVizPanel");


})


