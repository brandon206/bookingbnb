<template>
    <div class="review-list-wrapper">
        <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">Review List</h6>
        <div v-if="loading">Loading ...</div>
        <div v-else>
            <div class="border-bottom d-none d-md-block" v-for="(review, index) in reviews" :key="index">
                <div class="row pt-4">
                    <div class="col-md-6">John Doe</div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <StarRating :value="review.rating" class="fa-lg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">{{ review.created_at | fromNow }}</div>
                </div>
                <div class="row pt-4 pb-4">
                    <div class="col-md-12">{{ review.content }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import moment from "moment";

export default {
    props: {
        bookableId: String,
    },
    data() {
        return {
            loading: false,
            reviews: null,
        };
    },
    created() {
        this.loading = true;
        axios.get(`/api/bookables/${this.bookableId}/reviews`)
            .then(response => this.reviews = response.data.data)
            .then(() => this.loading = false);
    },
    // filters: {
    //     fromNow(value) {
    //         return moment(value).fromNow();
    //     }
    // },
}
</script>

<style lang="scss" scoped>
    .review-list-wrapper {
        padding: 1.25rem;
    }
</style>