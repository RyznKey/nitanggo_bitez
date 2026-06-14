import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
export const jaringan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jaringan.url(options),
    method: 'get',
})

jaringan.definition = {
    methods: ["get","head"],
    url: '/reseller/jaringan-saya',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
jaringan.url = (options?: RouteQueryOptions) => {
    return jaringan.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
jaringan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jaringan.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
jaringan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: jaringan.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
    const jaringanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: jaringan.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
        jaringanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: jaringan.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:39
 * @route '/reseller/jaringan-saya'
 */
        jaringanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: jaringan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    jaringan.form = jaringanForm
const reseller = {
    jaringan: Object.assign(jaringan, jaringan),
}

export default reseller