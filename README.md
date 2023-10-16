1) In your terminal:

``` bash
$ composer require sonph/survey_admin
```

2) Publish the config file:

```bash
php artisan vendor:publish --provider="Sonphait\Survey\SurveyServiceProvider"
```

3) [optional] Change values in config/survey-manager.php (route prefix, middleware)

## License

MIT. Please see the [license file](license.md) for more information.