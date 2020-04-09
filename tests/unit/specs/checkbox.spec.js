import { expect } from 'chai'
import { destroyVM } from '../util';
import { mount } from '@vue/test-utils'
import SzCheckbox from '@/components/checkbox'
import SzCheckboxButton from '@/components/checkbox-button'
import SzCheckboxGroup from '@/components/checkbox-group'
import SzRow from '@/components/row'

describe('Checkbox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    const Wrapper = mount(SzCheckbox);
    vm = Wrapper.vm;
    let checkboxElm = vm.$el;
    expect(checkboxElm.classList.contains('sz-checkbox')).to.be.true;
    checkboxElm.click();
    vm.$nextTick(_ => {
      expect(checkboxElm.querySelector('.is-checked')).to.be.ok;
      done();
    });
  });
  it('disabled', () => {
    const Component = {
      components: {
        SzCheckbox
      },
      template: `
        <sz-checkbox
          v-model="checked"
          disabled
        >
        </sz-checkbox>
      `,
      data() {
        return {
          checked: false
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    let checkboxElm = vm.$el;
    expect(checkboxElm.querySelector('.is-disabled')).to.be.ok;
  });
  it('change event', done => {
    const Component = {
      components: {
        SzCheckbox
      },
      template: `
        <sz-checkbox v-model="checked" @change="onChange">
        </sz-checkbox>
      `,
      methods: {
        onChange(val) {
          this.data = val;
        }
      },
      data() {
        return {
          data: '',
          checked: false
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    let checkboxElm = vm.$el;
    checkboxElm.click();
    setTimeout(_ => {
      expect(vm.data).to.true;
      vm.checked = false;
      setTimeout(_ => {
        expect(vm.data).to.true;
        done();
      }, 10);
    }, 10);
  });
  it('checkbox group', done => {
    const Component = {
      components: {
        SzCheckbox,
        SzCheckboxGroup
      },
      template: `
        <sz-checkbox-group v-model="checkList">
          <sz-checkbox label="a" ref="a"></sz-checkbox>
          <sz-checkbox label="b" ref="b"></sz-checkbox>
          <sz-checkbox label="c" ref="c"></sz-checkbox>
          <sz-checkbox label="d" ref="d"></sz-checkbox>
        </sz-checkbox-group>
      `,
      data() {
        return {
          checkList: []
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    expect(vm.checkList.length === 0).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      done();
    });
  });

  it('checkbox group change event', done => {
    const Component = {
      components: {
        SzCheckbox,
        SzCheckboxGroup
      },
      template: `
        <sz-checkbox-group v-model="checkList" @change="onChange">
          <sz-checkbox label="a" ref="a"></sz-checkbox>
          <sz-checkbox label="b" ref="b"></sz-checkbox>
        </sz-checkbox-group>
      `,
      methods: {
        onChange(val) {
          this.data = val;
        }
      },
      data() {
        return {
          data: '',
          checkList: []
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    vm.$refs.a.$el.click();
    setTimeout(_ => {
      expect(vm.data).to.deep.equal(['a']);
      vm.checkList = ['b'];
      done();
    }, 10);
  });

  it('checkbox group minimum and maximum', done => {
    const Component = {
      components: {
        SzCheckbox,
        SzCheckboxGroup
      },
      template: `
        <sz-checkbox-group
          v-model="checkList"
          :min="1"
          :max="2"
        >
          <sz-checkbox label="a" ref="a"></sz-checkbox>
          <sz-checkbox label="b" ref="b"></sz-checkbox>
          <sz-checkbox label="c" ref="c"></sz-checkbox>
          <sz-checkbox label="d" ref="d"></sz-checkbox>
        </sz-checkbox-group>
      `,
      data() {
        return {
          checkList: ['a'],
          lastEvent: null
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    expect(vm.checkList.length === 1).to.be.true;
    expect(vm.$refs.a.isDisabled).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(() => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      vm.$refs.b.$el.click();
      vm.$nextTick(() => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        expect(vm.checkList.indexOf('b') !== -1).to.be.true;
        vm.$refs.c.$el.click();
        vm.$nextTick(() => {
          expect(vm.checkList.indexOf('c') !== -1).to.be.false;
          expect(vm.checkList.indexOf('d') !== -1).to.be.false;
          expect(vm.$refs.c.isDisabled).to.be.true;
          expect(vm.$refs.d.isDisabled).to.be.true;
          done();
        });
      });
    });
  });

  it('nested group', done => {
    const Component = {
      components: {
        SzCheckbox,
        SzCheckboxGroup,
        SzRow
      },
      template: `
        <sz-checkbox-group v-model="checkList">
          <sz-row>
            <sz-checkbox label="a" ref="a"></sz-checkbox>
            <sz-checkbox label="b" ref="b"></sz-checkbox>
            <sz-checkbox label="c" ref="c"></sz-checkbox>
            <sz-checkbox label="d" ref="d"></sz-checkbox>
          </sz-row>
        </sz-checkbox-group>
      `,
      data() {
        return {
          checkList: []
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    expect(vm.checkList.length === 0).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      done();
    });
  });

  it('true false label', done => {
    const Component = {
      components: {
        SzCheckbox
      },
      template: `
        <sz-checkbox true-label="a" :false-label="3" v-model="checked"></sz-checkbox>
      `,
      data() {
        return {
          checked: 'a'
        };
      }
    }
    const Wrapper = mount(Component);
    vm = Wrapper.vm;
    vm.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checked === 3).to.be.true;
      done();
    });
  });
  describe('checkbox-button', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });

    it('create', done => {
      const Component = {
        components: {
          SzCheckboxButton
        },
        template: `
          <sz-checkbox-button v-model="checked">
          </sz-checkbox-button>
        `,
        data() {
          return {
            checked: false
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      let checkboxElm = vm.$el;
      expect(checkboxElm.classList.contains('sz-checkbox-button')).to.be.true;
      checkboxElm.click();
      vm.$nextTick(_ => {
        expect(checkboxElm.classList.contains('is-checked')).to.be.ok;
        done();
      });
    });
    it('disabled', () => {
      const Component = {
        components: {
          SzCheckboxButton
        },
        template: `
          <sz-checkbox-button
            v-model="checked"
            disabled
          >
          </sz-checkbox-button>
        `,
        data() {
          return {
            checked: false
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      let checkboxElm = vm.$el;
      expect(checkboxElm.classList.contains('is-disabled')).to.be.ok;
    });

    it('change event', done => {
      const Component = {
        components: {
          SzCheckboxButton
        },
        template: `
        <sz-checkbox-button v-model="checked" @change="onChange">
        </sz-checkbox-button>
      `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checked: false
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      let checkboxElm = vm.$el;
      checkboxElm.click();
      setTimeout(_ => {
        expect(vm.data).to.true;
        vm.checked = false;
        setTimeout(_ => {
          expect(vm.data).to.true;
          done();
        }, 10);
      }, 10);
    });

    it('checkbox group', done => {
      const Component = {
        components: {
          SzCheckboxButton,
          SzCheckboxGroup
        },
        template: `
          <sz-checkbox-group v-model="checkList">
            <sz-checkbox-button label="a" ref="a"></sz-checkbox-button>
            <sz-checkbox-button label="b" ref="b"></sz-checkbox-button>
            <sz-checkbox-button label="c" ref="c"></sz-checkbox-button>
            <sz-checkbox-button label="d" ref="d"></sz-checkbox-button>
          </sz-checkbox-group>
        `,
        data() {
          return {
            checkList: []
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      expect(vm.checkList.length === 0).to.be.true;
      vm.$refs.a.$el.click();
      vm.$nextTick(_ => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        vm.$refs.b.$el.click();
        vm.$nextTick(_ => {
          expect(vm.checkList.indexOf('a') !== -1).to.be.true;
          expect(vm.checkList.indexOf('b') !== -1).to.be.true;
          done();
        });
      });
    });

    it('checkbox-button group change event', done => {
      const Component = {
        components: {
          SzCheckboxButton,
          SzCheckboxGroup
        },
        template: `
        <sz-checkbox-group v-model="checkList" @change="onChange">
          <sz-checkbox-button label="a" ref="a"></sz-checkbox-button>
          <sz-checkbox-button label="b" ref="b"></sz-checkbox-button>
          <sz-checkbox-button label="c" ref="c"></sz-checkbox-button>
          <sz-checkbox-button label="d" ref="d"></sz-checkbox-button>
        </sz-checkbox-group>
      `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checkList: []
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      vm.$refs.a.$el.click();
      setTimeout(_ => {
        expect(vm.data).to.deep.equal(['a']);
        vm.checkList = ['b'];
        setTimeout(_ => {
          expect(vm.data).to.deep.equal(['a']);
          done();
        }, 10);
      }, 10);
    });

    it('checkbox group props', () => {
      const Component = {
        components: {
          SzCheckboxButton,
          SzCheckboxGroup
        },
        template: `
          <sz-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
            <sz-checkbox-button label="a" ref="a"></sz-checkbox-button>
            <sz-checkbox-button label="b" ref="b"></sz-checkbox-button>
            <sz-checkbox-button label="c" ref="c"></sz-checkbox-button>
            <sz-checkbox-button label="d" ref="d"></sz-checkbox-button>
          </sz-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a', 'd']
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      expect(vm.checkList.length === 2).to.be.true;
      expect(vm.$refs.a.$el.classList.contains('is-checked')).to.be.true;
      expect(vm.$refs.a.$el.classList.contains('sz-checkbox-button--large')).to.be.true;
      expect(vm.$refs.a.$el.querySelector('.sz-checkbox-button__inner').style.backgroundColor).to.be.eql('rgb(255, 0, 0)');
      expect(vm.$refs.a.$el.querySelector('.sz-checkbox-button__inner').style.boxShadow).to.be.eql('-1px 0 0 0 #FF0000');
      expect(vm.$refs.a.$el.querySelector('.sz-checkbox-button__inner').style.borderColor).to.be.eql('#ff0000');
      expect(vm.$refs.a.$el.querySelector('.sz-checkbox-button__inner').style.color).to.be.eql('rgb(0, 0, 0)');
      expect(vm.$refs.b.$el.classList.contains('is-checked')).to.be.false;
      expect(vm.$refs.c.$el.classList.contains('is-checked')).to.be.false;
      expect(vm.$refs.d.$el.classList.contains('is-checked')).to.be.true;
    });

    it('checkbox group minimum and maximum', done => {
      const Component = {
        components: {
          SzCheckboxButton,
          SzCheckboxGroup
        },
        template: `
          <sz-checkbox-group
            v-model="checkList"
            :min="1"
            :max="2"
          >
            <sz-checkbox-button label="a" ref="a"></sz-checkbox-button>
            <sz-checkbox-button label="b" ref="b"></sz-checkbox-button>
            <sz-checkbox-button label="c" ref="c"></sz-checkbox-button>
            <sz-checkbox-button label="d" ref="d"></sz-checkbox-button>
          </sz-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a'],
            lastEvent: null
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      expect(vm.checkList.length === 1).to.be.true;
      vm.$refs.a.$el.click();
      vm.$nextTick(() => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        vm.$refs.b.$el.click();
        vm.$nextTick(() => {
          expect(vm.checkList.indexOf('a') !== -1).to.be.true;
          expect(vm.checkList.indexOf('b') !== -1).to.be.true;
          vm.$refs.c.$el.click();
          vm.$nextTick(() => {
            expect(vm.checkList.indexOf('c') !== -1).to.be.false;
            expect(vm.checkList.indexOf('d') !== -1).to.be.false;
            done();
          });
        });
      });
    });

    it('nested group', done => {
      const Component = {
        components: {
          SzCheckboxButton,
          SzCheckboxGroup,
          SzRow
        },
        template: `
          <sz-checkbox-group v-model="checkList">
            <sz-row>
              <sz-checkbox-button label="a" ref="a"></sz-checkbox-button>
              <sz-checkbox-button label="b" ref="b"></sz-checkbox-button>
              <sz-checkbox-button label="c" ref="c"></sz-checkbox-button>
              <sz-checkbox-button label="d" ref="d"></sz-checkbox-button>
            </sz-row>
          </sz-checkbox-group>
        `,
        data() {
          return {
            checkList: []
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      expect(vm.checkList.length === 0).to.be.true;
      vm.$refs.a.$el.click();
      vm.$nextTick(_ => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        done();
      });
    });

    it('true false label', done => {
      const Component = {
        components: {
          SzCheckboxButton
        },
        template: `
          <sz-checkbox-button
            true-label="a"
            :false-label="3"
            v-model="checked"
          ></sz-checkbox-button>
        `,
        data() {
          return {
            checked: 'a'
          };
        }
      }
      const Wrapper = mount(Component);
      vm = Wrapper.vm;
      vm.$el.click();
      vm.$nextTick(_ => {
        expect(vm.checked === 3).to.be.true;
        done();
      });
    });
  });
});
