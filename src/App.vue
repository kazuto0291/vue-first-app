<template>
  <div id="app">
    <h1>Form</h1>
  <InputText />
  <Checkbox />
  <Radio />
  <TextArea />
  <Select />
    <Wrapper>
      <template v-shot:header>
        <h1>H1タイトル in header</h1>
        <h2>H2タイトル in header</h2>
      </template>
      
      <template v-slot:header>
        <h1>H1タイトル in default</h1>
        <h2>H2タイトル in default</h2>
      </template>


      <template v-slot:footert>
        <h1>H1タイトル in default</h1>
        <h2>H2タイトル in default</h2>
      </template>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from './components/Wapper';
import InputText from './components/InputText';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import TextArea from './components/TextArea';
import Select from './components/Select';

export default {
  name: 'App',
  components: {
    Wrapper,
    InputText,
    Checkbox,
    Radio,
    TextArea,
    Select
  }
}
</script>

<style>

</style>