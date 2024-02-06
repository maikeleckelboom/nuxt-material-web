<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="flex flex-wrap gap-2">
      <h1>Common Buttons</h1>
      <OutlinedButton>
        Outlined Button
      </OutlinedButton>
      <FilledButton>
        Filled Button
      </FilledButton>
      <FilledTonalButton>
        Filled Tonal Button
      </FilledTonalButton>
      <ElevatedButton>
        Elevated Button
      </ElevatedButton>
      <TextButton>
        Text Button
      </TextButton>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Icon Buttons (toggle)</h1>
      <IconButton toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </IconButton>
      <FilledIconButton toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </FilledIconButton>
      <FilledTonalIconButton toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </FilledTonalIconButton>
      <OutlinedIconButton toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </OutlinedIconButton>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Icon Buttons (toggle selected)</h1>
      <IconButton selected toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </IconButton>
      <FilledIconButton selected toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </FilledIconButton>
      <FilledTonalIconButton selected toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </FilledTonalIconButton>
      <OutlinedIconButton selected toggle>
        <Icon name="ic:round-check"/>
        <Icon slot="selected" name="ic:round-close"/>
      </OutlinedIconButton>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>FAB (sm,md,lg)</h1>
      <FAB size="small" variant="tertiary">
        <Icon slot="icon" name="ic:round-add"/>
      </FAB>
      <FAB variant="secondary">
        <Icon slot="icon" name="ic:round-add"/>
      </FAB>
      <FAB size="large" variant="primary">
        <Icon slot="icon" name="ic:round-add"/>
      </FAB>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Extended FAB (md)</h1>
      <FAB label="Add New">
        <Icon slot="icon" name="ic:round-add"/>
      </FAB>
      <FAB label="Add New">
        <Icon slot="icon" name="ic:round-add"/>
      </FAB>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Branded FAB (md, large)</h1>
      <BrandedFAB>
        <Icon slot="icon" name="ic:round-edit"/>
      </BrandedFAB>
      <BrandedFAB size="large">
        <Icon slot="icon" name="ic:round-edit"/>
      </BrandedFAB>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Branded Extended FAB</h1>
      <BrandedFAB label="Add">
        <svg slot="icon" viewBox="0 0 36 36">
          <path d="M16 16v14h4V20z" fill="#34A853"></path>
          <path d="M30 16H20l-4 4h14z" fill="#4285F4"></path>
          <path d="M6 16v4h10l4-4z" fill="#FBBC05"></path>
          <path d="M20 16V6h-4v14z" fill="#EA4335"></path>
          <path d="M0 0h36v36H0z" fill="none"></path>
        </svg>
      </BrandedFAB>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>FAB (lowered)</h1>
      <FAB lowered>
        <Icon slot="icon" name="ic:round-add"/>
      </FAB>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Chips</h1>
      <ChipSet>
        <AssistChip label="Assist"></AssistChip>
        <FilterChip label="Filter"></FilterChip>
        <InputChip label="Input"></InputChip>
        <SuggestionChip label="Suggestion"></SuggestionChip>
      </ChipSet>
    </div>
    <div class="flex flex-wrap gap-2">
      <h1>Slider</h1>
      <Slider
          range
          step="5"
          ticks
          value-end="75"
          value-start="25"
      ></Slider>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ChipSet from "~/modules/material-web/runtime/components/Chip/ChipSet.vue";
import AssistChip from "~/modules/material-web/runtime/components/Chip/AssistChip.vue";
</script>
