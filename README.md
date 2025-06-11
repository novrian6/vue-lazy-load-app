This repo is sample code for this article https://novrian.substack.com/publish/posts/detail/165701101/share-center

What is Lazy-Loading?

In default condition, all components in your Vue application is bundled together and loaded when the user first accesses your site. This can result in longer load times as the application grows in size.

Lazy-loading solves this problem by loading components only when they are needed. For example, the AdminPanel.vue component will only be fetched from the server when a user navigates to the /admin route.
