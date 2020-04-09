import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import SzButton from '@/components/button'

describe('Button', () => {
  it('create', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        type: 'primary'
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('sz-button--primary')).to.be.true;
  });
  it('icon', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        icon: 'sz-icon-search'
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.querySelector('.sz-icon-search')).to.be.ok;
  });
  it('nativeType', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        nativeType: 'submit'
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.getAttribute('type')).to.be.equal('submit');
  });
  it('loading', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        loading: true
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('is-loading')).to.be.true;
    expect(buttonElm.querySelector('.sz-icon-loading')).to.be.ok;
  });
  it('disabled', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        disabled: true
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('is-disabled')).to.be.true;
  });
  it('size', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        size: 'medium'
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('sz-button--medium')).to.be.true;
  });
  it('plain', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        plain: true
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('is-plain')).to.be.true;
  });
  it('round', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        round: true
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('is-round')).to.be.true;
  });
  it('circle', () => {
    const Wrapper = shallowMount(SzButton, {
      propsData: {
        circle: true
      }
    });
    const buttonElm = Wrapper.vm.$el;
    expect(buttonElm.classList.contains('is-circle')).to.be.true;
  });
  it('click', done => {
    let result;
    const Component = {
      components: {
        SzButton
      },
      template: '<sz-button @click="handleClick"></sz-button>',
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }
    const Wrapper = mount(Component);
    const buttonElm = Wrapper.find('button');
    buttonElm.trigger('click');
    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });
  it('click inside', done => {
    let result;
    const Component = {
      components: {
        SzButton
      },
      template: '<sz-button @click="handleClick"><span class="inner-slot"></span></sz-button>',
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }
    const Wrapper = mount(Component);
    const buttonElm = Wrapper.find('.inner-slot');
    buttonElm.trigger('click');

    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });
  it('loading implies disabled', done => {
    let result;
    const Component = {
      components: {
        SzButton
      },
      template: '<sz-button loading @click="handleClick"><span class="inner-slot"></span></sz-button>',
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }
    const Wrapper = mount(Component);
    const buttonElm = Wrapper.find('button');
    buttonElm.trigger('click');
    setTimeout(_ => {
      expect(result).to.not.exist;
      done();
    }, 20);
  });
});
