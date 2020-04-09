<script>
export default {
  name: 'SzTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render(h) {
    const { type, tagSize, hit, effect } = this;
    const classes = [
      'sz-tag',
      type ? `sz-tag--${type}` : '',
      tagSize ? `sz-tag--${tagSize}` : '',
      effect ? `sz-tag--${effect}` : '',
      hit && 'is-hit'
    ];
    const tagEl = (
      <span
        class={ classes }
        style={{ backgroundColor: this.color }}
        on-click={ this.handleClick }>
        { this.$slots.default }
        {
          this.closable && <i class="sz-tag__close sz-icon-close" on-click={ this.handleClose }></i>
        }
      </span>
    );

    return this.disableTransitions ? tagEl : <transition name="sz-zoom-in-center">{ tagEl }</transition>;
  }
};
</script>
