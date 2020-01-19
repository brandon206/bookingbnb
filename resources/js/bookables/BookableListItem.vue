<template>
    <div class="card w-100">
        <div class="card-body">
            <h5 class="card-title">{{ itemTitle }}</h5>
            <p class="card-text">{{ itemDescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemTitle: {
            type: String,
            required: true,
            default: '',
        },
        itemDescription: {
            type: String,
            required: true,
            default: '',
        },
        price: {
            type: Number,
            required: true,
            default: null,
        },
    }
}
</script>

<style>

</style>