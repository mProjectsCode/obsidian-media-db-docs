<template>
    <div class="content">
        <p>
            <strong>Obsidian Media DB Plugin</strong> is a plugin for <external-link to="https://obsidian.md/">Obsidian</external-link>,
            that can query multiple APIs for movies, series, anime, games, music and wiki articles, and import them into your vault.
        </p>

        <h3 id="issues">Bugs, Errors or Unexpected Behavior?</h3>
        <p>
            Please report the problem
            <external-link to="https://github.com/mProjectsCode/obsidian-media-db-plugin/issues">here</external-link>
            .
        </p>

        <h3 id="contributing">Features Requests and Contributing</h3>
        <p>
            Contributions are always welcome. If you have an idea, feel free to open a feature request under the <external-link
                to="https://github.com/mProjectsCode/obsidian-media-db-plugin/issues">issues tab on GitHub</external-link> or
            even create a pull request.
        </p>
        <p>
            Contributors: <i>List of contributors goes here</i>
        </p>

        <h3 id="other-work">Check out my other work</h3>
        <p>
            Other Plugins that i meade for Obsidian <br/>
            - <external-link to="https://github.com/mProjectsCode/obsidian-meta-bind-plugin">Obsidian Meta Bind Plugin</external-link>
        </p>
        <p>
            Take a look at my other projects on my <external-link to="https://mprojectscode.github.io/">website</external-link>. Alternatively
            you can check me out on <external-link to="https://github.com/mProjectsCode">GitHub</external-link>.
        </p>


    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'HomeView',
    components: {ExternalLink, CalloutComponent},
})
export default class HomeView extends Vue {
}
</script>
