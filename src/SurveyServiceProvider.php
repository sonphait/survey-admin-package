<?php

namespace Sonphait\SurveyAdmin;

use Illuminate\Support\ServiceProvider;

class SurveyServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/resources/views', 'survey-manager');
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');

        // Publishing is only necessary when using the CLI.
        $this->definePublishable();
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/config/survey-manager.php', 'survey-manager'
        );
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['survey-manager'];
    }

    private function definePublishable()
    {
        $this->publishes([
            __DIR__.'/config/survey-manager.php' => config_path('survey-manager.php'),
        ]);

        $this->publishes([
            __DIR__.'/public' => public_path('vendor/survey-manager'),
        ], 'public');

        $this->publishes([
            __DIR__.'/resources/views' => resource_path('views/vendor/survey-manager'),
        ]);

        $this->publishes([
            __DIR__.'/database/migrations' => database_path('migrations'),
        ], 'migrations');

        $this->publishes([
            __DIR__ . '/database/seeders' => database_path('seeders'),
        ]);
    }
}
