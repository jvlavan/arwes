const playgroundConfigs = [
  {
    name: 'animation',
    components: [
      {
        name: 'Animator',
        sandboxes: [
          { name: 'basic', code: require('repository/packages/animation/src/Animator/basic.sandbox.md').default }
        ]
      },
      {
        name: 'withAnimator',
        sandboxes: [
          { name: 'basic', code: require('repository/packages/animation/src/withAnimator/basic.sandbox.md').default },
          { name: 'nested', code: require('repository/packages/animation/src/withAnimator/nested.sandbox.md').default },
          { name: 'staggering', code: require('repository/packages/animation/src/withAnimator/staggering.sandbox.md').default },
          { name: 'sequence', code: require('repository/packages/animation/src/withAnimator/sequence.sandbox.md').default },
          { name: 'custom-manager', code: require('repository/packages/animation/src/withAnimator/custom-manager.sandbox.md').default }
        ]
      },
      {
        name: 'extendAnimator',
        sandboxes: [
          { name: 'basic', code: require('repository/packages/animation/src/extendAnimator/basic.sandbox.md').default }
        ]
      }
    ]
  }
];

export { playgroundConfigs };
