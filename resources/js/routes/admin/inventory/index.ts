import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/inventory',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\InventoryController::index
 * @see app/Http/Controllers/Admin/InventoryController.php:12
 * @route '/admin/inventory'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/inventory/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\InventoryController::exportMethod
 * @see app/Http/Controllers/Admin/InventoryController.php:77
 * @route '/admin/inventory/export'
 */
        exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
/**
* @see \App\Http\Controllers\Admin\InventoryController::addStock
 * @see app/Http/Controllers/Admin/InventoryController.php:64
 * @route '/admin/inventory/add-stock'
 */
export const addStock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addStock.url(options),
    method: 'post',
})

addStock.definition = {
    methods: ["post"],
    url: '/admin/inventory/add-stock',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\InventoryController::addStock
 * @see app/Http/Controllers/Admin/InventoryController.php:64
 * @route '/admin/inventory/add-stock'
 */
addStock.url = (options?: RouteQueryOptions) => {
    return addStock.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\InventoryController::addStock
 * @see app/Http/Controllers/Admin/InventoryController.php:64
 * @route '/admin/inventory/add-stock'
 */
addStock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addStock.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\InventoryController::addStock
 * @see app/Http/Controllers/Admin/InventoryController.php:64
 * @route '/admin/inventory/add-stock'
 */
    const addStockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addStock.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\InventoryController::addStock
 * @see app/Http/Controllers/Admin/InventoryController.php:64
 * @route '/admin/inventory/add-stock'
 */
        addStockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addStock.url(options),
            method: 'post',
        })
    
    addStock.form = addStockForm
const inventory = {
    index: Object.assign(index, index),
export: Object.assign(exportMethod, exportMethod),
addStock: Object.assign(addStock, addStock),
}

export default inventory