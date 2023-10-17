
$(document).ready(function() {
    const surveyJson = $('#survey_json').val();

    const survey = new Survey.Model(surveyJson);

    const pdfDocOptions = {
        fontSize: 12
    };

    const savePdf = function (surveyData) {
        const surveyPdf = new SurveyPDF.SurveyPDF(surveyJson, pdfDocOptions);
        surveyPdf.data = surveyData;
        surveyPdf.save();
    };

    $('#export_pdf_btn').click(function(){
        savePdf(survey.data);
    });

})


