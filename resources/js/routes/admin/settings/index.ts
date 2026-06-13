import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
export const promo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: promo.url(options),
    method: 'get',
})

promo.definition = {
    methods: ["get","head"],
    url: '/admin/settings/promo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
promo.url = (options?: RouteQueryOptions) => {
    return promo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
promo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: promo.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
promo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: promo.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
    const promoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: promo.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
        promoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: promo.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
        promoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: promo.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    promo.form = promoForm
const settings = {
    promo: Object.assign(promo, promo),
}

export default settings