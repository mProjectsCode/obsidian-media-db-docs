<template>
    <div class="content">
        <h1>Features</h1>
        <p>
            This is an overview of the features of this plugin.
        </p>

        <h3 id="advanced-search">Advanced Search</h3>
        <p>
            Search a movie, series, anime, game, music release or wiki article by its name across multiple APIs that you manually select.
        </p>

        <h3 id="id-search">ID Search</h3>
        <p>
            Search the APIs using the id of the item you want to search for.
            The ids for items are dependent on the API you decide to query.
        </p>

        <h3 id="bulk-import">Bulk Import</h3>
        <p>
            The plugin allows you to import your preexisting media collection and upgrade them to Media DB entries.
        </p>

        <h4>Prerequisites</h4>
        <p>
            The preexisting media notes must be inside a folder in your vault.
            For the plugin to be able to query them, they need a metadata field that is used as the title for searching the item.
            This can be achieved by for example using a csv import plugin to import an existing list from outside of obsidian.
        </p>

        <h4>Importing</h4>
        <p>
            To start the import process, right-click on the folder and select the <code class="inline">Import folder as Media DB entries</code> option.
            Then specify the API to search, if the current note content and metadata should be appended to the Media DB entry
            and the name of the metadata field that contains the title.

            Then the plugin will go through every file in the folder, query the API and prompt you to select from the search results.
        </p>

        <h4>Post Import</h4>
        <p>
            After all files have been imported or the import was canceled,
            you will find the new entries as well as an error report that contains any errors or skipped/canceled files in the folder specified in the setting of the plugin.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'FeaturesView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class FeaturesView extends Vue {
}
</script>

<style scoped>

</style>