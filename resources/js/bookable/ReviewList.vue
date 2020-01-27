<template>
    <div class="review-list-wrapper">
        <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">Review List</h6>

        <div class="border-bottom d-none d-md-block" v-for="num in 3" :key="num">
            <div class="row pt-4">
                <div class="col-md-6">John Doe</div>
                <div class="col-md-6 d-flex justify-content-end">Star Rating</div>
            </div>
            <div class="row">
                <div class="col-md-12">Added 5 mins ago...</div>
            </div>
            <div class="row pt-4 pb-4">
                <div class="col-md-12">Content of the Review</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .review-list-wrapper {
        padding: 1.25rem;
    }
</style>