<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod';
import { InsertLocationSchema } from '../../lib/db/schema/location'

const form = useForm({
    validationSchema: toTypedSchema(InsertLocationSchema),
})

const router = useRouter()
const submitError = ref<string | null>(null)
const isLoading = computed(() => form.isSubmitting.value)

const onSubmit = form.handleSubmit(async values => {
    const { data, error } = await useFetch('/api/locations', {
        method: 'POST',
        body: values
    })

    if (error.value) {
        if (error.value?.data?.data) {
            form.setErrors(error.value.data.data)
        } else {
            submitError.value = "An unknown error occurred"
        }
        return
    }

    console.log("Success ", data)

    submitError.value = null
})

onBeforeRouteLeave(() => {
    return !form.meta.value.dirty || window.confirm('Are you sure you want to leave? Any unsaved changes will be lost.')
})

</script>

<template>
    <div class="container max-w-md mx-auto mt-4" v-auto-animate>
        <div class="mb-6 flex flex-col gap-1">
            <h1 class="text-2xl font-bold">Add location</h1>
            <p>
                A location is a place where you can travel. It can be a city, a country, a continent, or even a planet.
            </p>
        </div>

        <div v-if="submitError" role="alert" class="alert alert-error alert-soft mb-4">
            <span>{{ submitError }}</span>
        </div>

        <form @submit.prevent="onSubmit" class="w-full flex flex-col gap-4">
            <fieldset class="fieldset gap-4">
                <legend class="fieldset-legend sr-only">Location details</legend>

                <AppFormField id="name" type="text" name="name" label="Name" placeholder="Name"
                    :error="form.errors.value.name" :disabled="isLoading" />

                <AppFormField id="description" as="textarea" name="description" label="Description"
                    placeholder="Description" :error="form.errors.value.description" :disabled="isLoading" />

                <AppFormField id="lat" type="number" name="lat" label="Latitude" placeholder="Latitude"
                    :error="form.errors.value.lat" :disabled="isLoading" />

                <AppFormField id="long" type="number" name="long" label="Longitude" placeholder="Longitude"
                    :error="form.errors.value.long" :disabled="isLoading" />
            </fieldset>

            <div class="flex items-center gap-4 justify-end">
                <button :disabled="isLoading" type="reset" class="btn btn-outline gap-x-2" @click="router.back()">
                    <Icon name="tabler:arrow-left" size="18" />
                    <span>Cancel</span>
                </button>
                <button :disabled="isLoading" type="submit" class="btn btn-primary gap-x-2" v-auto-animate>
                    <span>Add</span>
                    <Icon v-if="!isLoading" name="tabler:map-heart" size="18" />
                    <span v-else class="loading loading-spinner loading-xs" />
                </button>
            </div>
        </form>
    </div>
</template>
