<template>
  <button
    class="gd-button"
    :disabled="disabled"
    @click="handleClick"
    :class="[
      `gd-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
  >
    <i v-if="icon"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'GdButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md',
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods() {
    handleClick: (e) => {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss">
@import "../../../theme/variable.scss";

.gd-button {
  display: inline-block;
  padding: 12px 16px;
  margin: 0;
  transition: 0.1s;
  line-height: 1;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid $border;
  color: $text;

  &:hover,
  &:focus {
    color: $primary;
    border-color: $primary;
  }

  &.is-plain:hover,
  &.is-plain:focus {
    background: $white;
    border-color: $primary;
    color: $primary;
  }
  &--primary {
    color: $white;
    background-color: $primary;
    border-color: $primary;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: $white;
    }
    &.is-plain {
      color: $primary;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: $primary;
        border-color: $primary;
        color: $white;
      }
    }
  }
  &--success {
    color: $white;
    background-color: $success;
    border-color: $success;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: $white;
    }
    &.is-plain {
      color: $success;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: $success;
        border-color: $success;
        color: $white;
      }
    }
  }
  &--info {
    color: $white;
    background-color: $text;
    border-color: $text;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: $white;
    }
    &.is-plain {
      color: $text;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: $text;
        border-color: $text;
        color: $white;
      }
    }
  }
  &--warning {
    color: $white;
    background-color: $warning;
    border-color: $warning;
    &:hover,
    &:focus {
      background: $warning-light;
      border-color: $warning-light;
      color: $white;
    }
    &.is-plain {
      color: $warning;
      background: #fdf6ec;
      // border-color: #f5dab1;
      &:hover,
      &:focus {
        background: $warning;
        border-color: $warning;
        color: $white;
      }
    }
  }
  &--danger {
    color: $white;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: $white;
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: $white;
      }
    }
  }
  // 圆角
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled {
    color: $disabled;
  }
}
.mc-button [class*="mc-icon-"] + span {
  margin-left: 5px;
}
</style>
