<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useQuery } from 'vue-query';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetcher1 = async (): Promise<Post[]> =>
    await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
        response.json(),
    );

const fetcher2 = async (id: number | undefined): Promise<Post | undefined> => {
    if (typeof id === 'undefined') {
        return undefined;
    }
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        (response) => response.json(),
    );
};

const currentPostId = ref<number | undefined>();
const setCurrentPostId = (postId: number | undefined) => {
    currentPostId.value = postId;
};
const { data: posts } = useQuery('posts', fetcher1);
const { isLoading, isError, isFetching, data, error } = useQuery(
    reactive(['post', { postId: currentPostId }]),
    () => fetcher2(currentPostId.value),
);
</script>

<template>
    <ul v-if="posts">
        <li
            v-for="post in posts.slice(0, 5)"
            :key="post.id"
            @click="setCurrentPostId(post.id)"
        >
            {{ post.title }}
        </li>
    </ul>
    <h1>Post {{ currentPostId }}</h1>
    <div v-if="isLoading" class="update">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data">
        <h1>{{ data.title }}</h1>
        <div>
            <p>{{ data.body }}</p>
        </div>
        <div v-if="isFetching" class="update">Background Updating...</div>
    </div>
</template>

<style scoped>
.update {
    font-weight: bold;
    color: green;
}
</style>
