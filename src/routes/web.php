<?php
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
        Route::get('/{id}/results', 'SurveyAdminController@result_list')->name('survey.results.list');
        Route::get('/results/{id}', 'SurveyAdminController@result_detail')->name('survey.results.detail');
    }
);
