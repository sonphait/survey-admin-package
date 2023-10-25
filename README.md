1) In your terminal:

``` bash
$ composer require sonph/survey_admin
```

2) Publish the config file:

```bash
php artisan vendor:publish --provider="Sonphait\SurveyAdmin\SurveyServiceProvider"
```

3) Run migration:
```bash
   php artisan migrate
```

4) Run seeder:
```bash
   php artisan db:seed --class=SurveySeeder
```

5) Go to index page: "admin/survey/index"
6) [optional] Change values in config/survey-manager.php (route prefix, middleware)
7) [optional] If you want to test function upload image to local when editing survey, do the following steps:
   1. Uncomment save image to local code in js/create_survey.js
   2. Change the domain value to your current one (Ex: http://127.0.0.1:8000/) in config/survey-manager.php
* Note 1: To show images of survey on local client survey, you have to run survey_admin code and survey_client code simultaneously
* Note 2: To create file type question which use local when uploading file from client site, uncomment code in js/create_survey.js
* Note 3: To use S3 as file storage, uncomment code in function upload of SurveyAdminController.php