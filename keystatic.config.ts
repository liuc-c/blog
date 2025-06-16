import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},

	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				published: fields.date({
					label: "Published Date",
					description: "The date this post was published",
					defaultValue: { kind: "today" },
				}),
				updated: fields.date({
					label: "Updated Date",
					description: "The date this post was last updated (optional)",
					defaultValue: { kind: "today" },
				}),
				draft: fields.checkbox({
					label: "Draft",
					description: "Mark this post as a draft",
					defaultValue: false,
				}),
				description: fields.text({
					label: "Description",
					description: "A brief description of the post",
					multiline: true,
				}),
				image: fields.text({
					label: "Image URL",
					description: "URL of the featured image for this post",
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tags",
					description: "Tags for categorizing this post",
					itemLabel: (props) => props.value || "New tag",
				}),
				category: fields.text({
					label: "Category",
					description: "The category this post belongs to",
				}),
				lang: fields.text({
					label: "Language",
					description: "Language code for this post (e.g., 'en', 'zh_CN')",
					defaultValue: "zh_CN",
				}),
				content: fields.markdoc({
					label: "Content",
					description: "The main content of the post",
					extension: "md",
				}),
			},
		}),
	},
});
