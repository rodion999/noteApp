<template>
    <div>
        <h2>App Note</h2>
        <note></note>
    </div>
</template>
<script>
import Note from '../components/Note.vue';
export default {
    name: 'Home',
    components: {
        Note,
    }
}
</script>