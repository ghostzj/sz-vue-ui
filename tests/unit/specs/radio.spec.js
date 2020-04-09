import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import SzRadio from '@/components/radio'
import SzRadioGroup from '@/components/radio-group'
import SzRadioButton from '@/components/radio-button'
import { triggerKeyDown } from '../util';

describe('Radio', () => {
  it('create', () => {
    const Wrapper = shallowMount(SzRadio);
    const radioElm = Wrapper.vm.$el;
    expect(radioElm.classList.contains('sz-radio')).to.be.true;
  });
  it('disabled', done => {
    const Component = {
      components: {
        SzRadio
      },
      template: `
        <sz-radio
          v-model="radio"
          label="3"
          disabled
        >
        </sz-radio>
      `,
      data() {
        return {
          radio: ''
        };
      }
    }
    const Wrapper = mount(Component);
    Wrapper.trigger('click');

    setTimeout(_ => {
      expect(Wrapper.vm.radio === '').to.be.true;
      expect(Wrapper.vm.$el.querySelector('.is-disabled')).to.be.ok;
      done();
    }, 10);
  });
  it('border', () => {
    const Component = {
      components: {
        SzRadio
      },
      template: `
        <sz-radio
          v-model="radio"
          label="3"
          border
        >
        </sz-radio>
      `,
      data() {
        return {
          radio: ''
        };
      }
    }
    const Wrapper = mount(Component);
    const radioElm = Wrapper.vm.$el;
    expect(radioElm.classList.contains('is-bordered')).to.be.true;
  });
  it('change event', done => {
    const Component = {
      components: {
        SzRadio
      },
      template: `
        <sz-radio
          v-model="radio"
          label="3"
          @change="handleChange"
        >
        </sz-radio>
      `,
      data() {
        return {
          radio: '',
          data: ''
        };
      },
      methods: {
        handleChange(val) {
          this.data = val;
        }
      }
    }
    const Wrapper = mount(Component);
    Wrapper.trigger('click');

    setTimeout(_ => {
      expect(Wrapper.vm.data).to.equal('3');
      done();
    }, 10);
  });
  it('change event only triggers on user input', done => {
    const Component = {
      components: {
        SzRadio
      },
      template: `
        <sz-radio
          v-model="radio"
          label="3"
          @change="handleChange"
        >
        </sz-radio>
      `,
      data() {
        return {
          radio: '',
          data: ''
        };
      },
      methods: {
        handleChange(val) {
          this.data = val;
        }
      }
    }
    const Wrapper = mount(Component);
    Wrapper.vm.radio = '3';
    setTimeout(_ => {
      expect(Wrapper.vm.data).to.equal('');
      done();
    }, 10);
  });
  describe('Radio group', () => {
    it('create', done => {
      const Component = {
        components: {
          SzRadioGroup,
          SzRadio
        },
        template: `
          <sz-radio-group v-model="radio">
            <sz-radio :label="3" ref="radio1">备选项</sz-radio>
            <sz-radio :label="6" ref="radio2">备选项</sz-radio>
            <sz-radio :label="9">备选项</sz-radio>
          </sz-radio-group>
        `,
        data() {
          return {
            radio: 3
          };
        }
      }
      const Wrapper = mount(Component);
      let vm = Wrapper.vm;
      setTimeout(_ => {
        expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.ok;
        let radioElm = vm.$refs.radio2.$el;
        radioElm.click();
        setTimeout(_ => {
          expect(radioElm.querySelector('.is-checked')).to.be.ok;
          expect(vm.radio === 6).to.be.true;
          done();
        }, 10);
      }, 50);
    });
    it('disabled', done => {
      const Component = {
        components: {
          SzRadioGroup,
          SzRadio
        },
        template: `
          <sz-radio-group v-model="radio" disabled>
            <sz-radio :label="3" ref="radio1">备选项</sz-radio>
            <sz-radio :label="6" ref="radio2">备选项</sz-radio>
            <sz-radio :label="9">备选项</sz-radio>
          </sz-radio-group>
        `,
        data() {
          return {
            radio: 3
          };
        }
      }
      const Wrapper = mount(Component);
      let vm = Wrapper.vm;
      let radio2 = vm.$refs.radio2;
      expect(vm.$el.querySelectorAll('label.is-disabled').length).to.be.equal(3);
      expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.exist;
      radio2.$el.click();
      setTimeout(_ => {
        expect(vm.radio === 3).to.be.true;
        expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.exist;
        done();
      }, 10);
    });
    it('change event', done => {
      const Component = {
        components: {
          SzRadioGroup,
          SzRadio
        },
        template: `
          <sz-radio-group v-model="radio" @change="onChange">
            <sz-radio :label="3">备选项</sz-radio>
            <sz-radio :label="6" ref="radio2">备选项</sz-radio>
            <sz-radio :label="9">备选项</sz-radio>
          </sz-radio-group>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            radio: 3,
            data: 0
          };
        }
      }
      const Wrapper = mount(Component);
      let vm = Wrapper.vm;
      let radio2 = vm.$refs.radio2;
      radio2.$el.click();
      setTimeout(_ => {
        expect(vm.data).to.equal(6);
        done();
      }, 10);
    });
    it('change event only triggers on user input', done => {
      const Component = {
        components: {
          SzRadioGroup,
          SzRadio
        },
        template: `
          <sz-radio-group v-model="radio" @change="onChange">
            <sz-radio :label="3">备选项</sz-radio>
            <sz-radio :label="6">备选项</sz-radio>
            <sz-radio :label="9">备选项</sz-radio>
          </sz-radio-group>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            radio: 3,
            data: 0
          };
        }
      }
      const Wrapper = mount(Component);
      let vm = Wrapper.vm;
      vm.radio = 6;
      setTimeout(_ => {
        expect(vm.data).to.equal(0);
        done();
      }, 10);
    });
    it('disabled when children is radio button', done => {
      const Component = {
        components: {
          SzRadioGroup,
          SzRadioButton
        },
        template: `
          <sz-radio-group v-model="radio" disabled>
            <sz-radio-button :label="3" ref="radio1">备选项</sz-radio-button>
            <sz-radio-button :label="6" ref="radio2">备选项</sz-radio-button>
            <sz-radio-button :label="9">备选项</sz-radio-button>
          </sz-radio-group>
        `,
        data() {
          return {
            radio: 3
          };
        }
      }
      const Wrapper = mount(Component);
      let vm = Wrapper.vm;
      let radio2 = vm.$refs.radio2;
      expect(vm.$el.querySelectorAll('.is-disabled').length).to.be.equal(3);
      expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
      radio2.$el.click();
      setTimeout(_ => {
        expect(vm.radio === 3).to.be.true;
        expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
        done();
      }, 10);
    });
    it('keyboard event', done => {
      const Component = {
        components: {
          SzRadioGroup,
          SzRadioButton
        },
        template: `
          <sz-radio-group v-model="radio">
            <sz-radio-button ref="radio1" :label="3">备选项</sz-radio-button>
            <sz-radio-button ref="radio2" :label="6">备选项</sz-radio-button>
            <sz-radio-button ref="radio3" :label="9">备选项</sz-radio-button>
          </sz-radio-group>
        `,
        data() {
          return {
            radio: 6
          };
        }
      }
      const Wrapper = mount(Component);
      let vm = Wrapper.vm;
      expect(vm.radio).to.be.equal(6);
      vm.$nextTick(() => {
        triggerKeyDown(vm.$refs.radio2.$el, 37);
        expect(vm.radio).to.be.equal(3);

        triggerKeyDown(vm.$refs.radio1.$el, 37);
        expect(vm.radio).to.be.equal(9);

        vm.$nextTick(() => {
          triggerKeyDown(vm.$refs.radio3.$el, 39);
          expect(vm.radio).to.be.equal(3);

          triggerKeyDown(vm.$refs.radio1.$el, 39);
          expect(vm.radio).to.be.equal(6);

          vm.$nextTick(() => {
            triggerKeyDown(vm.$refs.radio1.$el, 13);
            expect(vm.radio).to.be.equal(6);

            done();
          });
        });
      });
    });
    describe('Radio Button', () => {
      it('create', done => {
        const Component = {
          components: {
            SzRadioGroup,
            SzRadioButton
          },
          template: `
            <sz-radio-group v-model="radio">
              <sz-radio-button :label="3" ref="radio1">备选项</sz-radio-button>
              <sz-radio-button :label="6" ref="radio2">备选项</sz-radio-button>
              <sz-radio-button :label="9">备选项</sz-radio-button>
            </sz-radio-group>
          `,
          data() {
            return {
              radio: 3
            };
          }
        }
        const Wrapper = mount(Component);
        let vm = Wrapper.vm;
        expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
        let radio = vm.$refs.radio2;
        radio.$el.click();
        setTimeout(_ => {
          expect(radio.$el.classList.contains('is-active')).to.be.true;
          expect(vm.radio === 6).to.be.true;
          done();
        }, 10);
      });
      it('custom color', done => {
        const Component = {
          components: {
            SzRadioGroup,
            SzRadioButton
          },
          template: `
            <sz-radio-group v-model="radio" fill="#000" text-color="#ff0">
              <sz-radio-button :label="3" ref="radio1">备选项</sz-radio-button>
              <sz-radio-button :label="6" ref="radio2">备选项</sz-radio-button>
              <sz-radio-button :label="9">备选项</sz-radio-button>
            </sz-radio-group>
          `,
          data() {
            return {
              radio: 3
            };
          }
        }
        const Wrapper = mount(Component);
        let vm = Wrapper.vm;
        setTimeout(_ => {
          expect(vm.$refs.radio1.activeStyle.backgroundColor).to.equal('#000');
          expect(vm.$refs.radio1.activeStyle.borderColor).to.equal('#000');
          expect(vm.$refs.radio1.activeStyle.color).to.equal('#ff0');
          done();
        }, 10);
      });
      it('change event', done => {
        const Component = {
          components: {
            SzRadioGroup,
            SzRadioButton
          },
          template: `
            <sz-radio-group v-model="radio" @change="onChange">
              <sz-radio-button :label="3">备选项</sz-radio-button>
              <sz-radio-button :label="6" ref="radio2">备选项</sz-radio-button>
              <sz-radio-button :label="9">备选项</sz-radio-button>
            </sz-radio-group>
          `,
          methods: {
            onChange(val) {
              this.data = val;
            }
          },
          data() {
            return {
              data: 0,
              radio: 3
            };
          }
        }
        const Wrapper = mount(Component);
        let vm = Wrapper.vm;
        let radio = vm.$refs.radio2;
        radio.$el.click();
        setTimeout(_ => {
          expect(vm.data).to.equal(6);
          done();
        }, 10);
      });
      it('change event only triggers on user input', done => {
        const Component = {
          components: {
            SzRadioGroup,
            SzRadioButton
          },
          template: `
            <sz-radio-group v-model="radio" @change="onChange">
              <sz-radio-button :label="3">备选项</sz-radio-button>
              <sz-radio-button :label="6" ref="radio2">备选项</sz-radio-button>
              <sz-radio-button :label="9">备选项</sz-radio-button>
            </sz-radio-group>
          `,
          methods: {
            onChange(val) {
              this.data = val;
            }
          },
          data() {
            return {
              data: 0,
              radio: 3
            };
          }
        }
        const Wrapper = mount(Component);
        let vm = Wrapper.vm;
        vm.radio = 6;
        setTimeout(_ => {
          expect(vm.data).to.equal(0);
          done();
        }, 10);
      });
      it('size', done => {
        const Component = {
          components: {
            SzRadioGroup,
            SzRadioButton
          },
          template: `
            <sz-radio-group v-model="radio" size="large">
              <sz-radio-button :label="3" ref="radio1">备选项</sz-radio-button>
              <sz-radio-button :label="6" ref="radio2">备选项</sz-radio-button>
              <sz-radio-button :label="9">备选项</sz-radio-button>
            </sz-radio-group>
          `,
          data() {
            return {
              radio: 3
            };
          }
        }
        const Wrapper = mount(Component);
        let vm = Wrapper.vm;
        setTimeout(_ => {
          expect(vm.$el.querySelectorAll('.sz-radio-button--large').length).to.be.equal(3);
          done();
        }, 10);
      });
    });
  });
});
