<?php
Route::group([
    'namespace'     =>  'Sonphait\SurveyAdmin\Http\Controllers',
    'middleware'    =>  config('survey-manager.route_middleware'),
    'prefix'        =>  config('survey-manager.route_prefix')
], function() {
    Route::get('/index', 'SurveyController@index')->name('survey.index');
    Route::get('/{surveySlug}', 'SurveyController@runSurvey')->name('survey.run');
});

Route::group(
    [
        'namespace'     =>  'Sonphait\SurveyAdmin\Http\Controllers',
        'prefix'        =>  config('survey-manager.admin_prefix').'/survey/',
        'middleware'    =>  config('survey-manager.admin_middleware'),
    ],
    function () {
        Route::get('/index', 'SurveyAdminController@index')->name('survey.admin.index');
        Route::post('/index', 'SurveyAdminController@createNew')->name('survey.admin.create_new');
        Route::get('/create/{id}', 'SurveyAdminController@showCreate')->name('survey.show_create');
        Route::post('/create/{id}', 'SurveyAdminController@create_content');
        Route::get('/delete/{id}', 'SurveyAdminController@delete_survey')->name('survey.delete');
    }
);
