<template>
    <div class="header">
        <div class="header-text">
            Obsidian Media DB Plugin
        </div>
    </div>
    <div class="main">
        <SidebarComponent/>
        <div class="content-wrapper">
            <callout-component calloutType="warning" header="UNDER CONSTRUCTION" style="margin-top: 0">
                These docs are still under construction.
            </callout-component>
            <RouterView/>
        </div>

    </div>
    <div class="footer">
        <span>Copyright All Rights Reserved</span>
        <a href="https://mprojectscode.github.io/privacy_statement_english">Privacy Policy</a>
        <a href="https://mprojectscode.github.io/privacy_statement_german">Datenschutz</a>
        <a href="https://mprojectscode.github.io/impressum">Impressum</a>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import SidebarComponent from '@/components/SidebarComponent.vue';
import CalloutComponent from '@/components/CalloutComponent.vue';


@Options({
    components: {SidebarComponent, CalloutComponent},
})
export default class App extends Vue {

}
</script>

<style>
@import "@/assets/base.css";


</style>
