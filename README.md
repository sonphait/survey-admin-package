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

5) [optional] Change values in config/survey-manager.php (route prefix, middleware)
6) [optional] If you want to test function upload image to local when editing survey, do the following steps:
   1. Uncomment save image to local code in js/create_survey.js
   2. Change the domain value to your current one (Ex: http://127.0.0.1:8000/) in config/survey-manager.php
   * Note: To show images of survey on local client survey, you have to run survey_admin code and survey_client code simultaneously