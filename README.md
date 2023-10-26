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
7) [optional] If you want to test function upload image to local or S3 when editing survey, do the following steps:
   1. Uncomment save image to local or S3 code in public/vendor/survey-manager/js/create_survey.js
   2. Change the domain value to your current one (Ex: http://127.0.0.1:8000/) in config/survey-manager.php
* Note 1: (If you save image to local) To show images of survey on local client survey, you have to run survey_admin code and survey_client code simultaneously
* Note 2: To create FILE question which use local or S3 when uploading file from client site, make properties 'storeDataAsText' value to false => uncomment code in public/vendor/survey-manager/js/create_survey.js
* Note 3: To use S3 as file storage, change value of 'upload_to_S3' to true in config/survey-manager.php