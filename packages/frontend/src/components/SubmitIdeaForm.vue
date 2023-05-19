<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
  submittedBy: '',
  content: '',
});

type FormData = typeof formData;

const fillRandomIdea = async () => {
  const { content } = await fetch('http://localhost:3000/random').then((res) =>
    res.json()
  );

  formData.content = content;
};

const emit = defineEmits<{
  (e: 'submitIdea', formData: FormData): void;
}>();
</script>

<template>
  <form v-on:submit="emit('submitIdea', formData)" class="submit-idea-form">
    <div class="field">
      <label for="submittedBy" class="label">Who are you?</label>
      <input
        type="text"
        name="submittedBy"
        id="submittedBy"
        v-model="formData.submittedBy"
      />
    </div>
    <div class="field">
      <div class="labelButtonWrapper">
        <label for="content" class="label">Your idea</label>
        <button class="doItDorMeButton" @click.prevent="fillRandomIdea">
          Write one for me
        </button>
      </div>
      <textarea
        type="text"
        name="content"
        id="content"
        v-model="formData.content"
      ></textarea>
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
.submit-idea-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  border-bottom: 1px mintcream solid;
  padding: 20px;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  white-space: nowrap;
  text-align: start;
}

textarea {
  resize: none;
  min-height: 5lh;
}

.doItDorMeButton {
  width: 120px !important;
}

.labelButtonWrapper {
  display: flex;
  gap: 5px;
}
</style>
