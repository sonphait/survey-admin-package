1) In your terminal:

``` bash
composer require sonph/survey_admin
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
6) [optional] Change values in config/survey-manager.php (route prefix, middleware, file upload max size, ...)
7) [optional] To test function upload image to S3 when editing survey, uncomment save image to S3 code in public/vendor/survey-manager/js/create_survey.js
8) To create FILE question which use S3 storage when uploading file from client site, make properties 'storeDataAsText' value to false => uncomment code in public/vendor/survey-manager/js/create_survey.js
* Note: To use S3 as file storage, change value of 'admin_s3_url' and 'admin_s3_folder' in config/survey-manager.php to where you save file on S3