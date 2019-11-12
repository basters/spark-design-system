export default {
  title: 'Fundamentals|Spacing',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
};

export const insetSpacing = () => (
  `
    <div class="sb-spacing-inset-tall-xs sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra small inset of 4px.
      </p>
    </div>
    <div class="sb-spacing-inset-tall-s sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the small inset of 8px.
      </p>
    </div>
    <div class="sb-spacing-inset-m sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the medium inset of 16px.
      </p>
    </div>
    <div class="sb-spacing-inset-l sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the large inset of 32px.
      </p>
    </div>
    <div class="sb-spacing-inset-xl sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra large inset of 64px.
      </p>
    </div>
  `
);

insetSpacing.story = {
  name: 'Inset',
};

export const insetSpacingShort = () => (
  `
    <div>
      <div class="sb-spacing-inset-short-xs sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the extra small inset short of 2px 4px 2px 4px.
        </p>
      </div>
      <div class="sb-spacing-inset-short-s sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the small inset short of 4px 8px 4px 8px.
        </p>
      </div>
      <div class="sb-spacing-inset-short-m sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the medium inset short of 8px 16px 8px 16px.
        </p>
      </div>
      <div class="sb-spacing-inset-short-l sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the large inset short of 16px 32px 16px 32px.
        </p>
      </div>
      <div class="sb-spacing-inset-short-xl sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the extra large inset short of 32px 64px 32px 64px.
        </p>
      </div>
    </div> 
  `
);

insetSpacingShort.story = {
  name: 'Inset Short',
};

export const insetSpacingTall = () => (
  `
    <div>
      <div class="sb-spacing-inset-tall-xs sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the extra small inset tall of 6px 4px 6px 4px.
        </p>
      </div>
      <div class="sb-spacing-inset-tall-s sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the small inset tall of 12px 8px 12px 8px.
        </p>
      </div>
      <div class="sb-spacing-inset-tall-m sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the medium inset tall of 24px 16px 24px 16px.
        </p>
      </div>
      <div class="sb-spacing-inset-tall-l sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the large inset tall of 48px 32px 48px 32px.
        </p>
      </div>
      <div class="sb-spacing-inset-tall-xl sprk-u-mbm">
        <p class="sprk-b-TypeBodyTwo">
          The grey border shows the extra large inset tall of 96px 64px 96px 64px.
        </p>
      </div>
    </div> 
  `
);

insetSpacingTall.story = {
  name: 'Inset Tall',
};

export const stackSpacing = () => (
  `
    <div>
      <div class="sb-spacing-stack-xs">
        <p class="sprk-b-TypeBodyTwo">
          The grey shows the extra small stack spacing of 4px.
        </p>
      </div>
      <div class="sb-spacing-stack-s sprk-u-man">
        <p class="sprk-b-TypeBodyTwo">
          The grey shows the small stack spacing of 8px.
        </p>
      </div>
      <div class="sb-spacing-stack-m sprk-u-man">
        <p class="sprk-b-TypeBodyTwo">
          The grey shows the medium stack spacing of 16px.
        </p>
      </div>
      <div class="sb-spacing-stack-l sprk-u-man">
        <p class="sprk-b-TypeBodyTwo">
          The grey shows the large stack spacing of 32px.
        </p>
      </div>
      <div class="sb-spacing-stack-xl sprk-u-man">
        <p class="sprk-b-TypeBodyTwo">
          The grey shows the extra large stack spacing of 64px.
        </p>
      </div> 
    </div>
  `
);

stackSpacing.story = {
  name: 'Stack',
};


export const inlineSpacing = () => (
  `
 <div>
      <p>
        Inline items with xs spacing.
      </p>
      <span class="sb-spacing-inline-right-xs">Cats</span><span class="sb-spacing-inline-right-xs">Dogs</span><span class="sb-spacing-inline-right-xs">Birds</span>

      <p>
        Inline items with s spacing.
      </p>
      <span class="sb-spacing-inline-right-s">Cats</span><span class="sb-spacing-inline-right-s">Dogs</span><span class="sb-spacing-inline-right-s">Birds</span>

      <p>
        Inline items with m spacing.
      </p>
      <span class="sb-spacing-inline-right-m">Cats</span><span class="sb-spacing-inline-right-m">Dogs</span><span class="sb-spacing-inline-right-m">Birds</span>

      <p>
        Inline items with l spacing.
      </p>
      <span class="sb-spacing-inline-right-l">Cats</span><span class="sb-spacing-inline-right-l">Dogs</span><span class="sb-spacing-inline-right-l">Birds</span>

      <p>
        Inline items with xl spacing.
      </p>
      <span class="sb-spacing-inline-right-xl">Cats</span><span class="sb-spacing-inline-right-xl">Dogs</span><span class="sb-spacing-inline-right-xl">Birds</span>

      <p>
        Inline items with no right margin on the last item.
      </p>
      <span class="sb-spacing-inline-right-m">Fish</span><span class="sb-spacing-inline-right-m">Frogs</span><span>Turtles</span> 
    </div> 
  `
);

inlineSpacing.story = {
  name: 'Inline',
};

export const inlineSpacingMisc = () => (
  `
    <p>
      The grey shows a margin right using the the misc "a" spacing of 24px.
    </p>
    <span class="sb-spacing-inline-right-misc-a">Cats</span><span class="sb-spacing-inline-right-misc-a">Dogs</span><span class="sb-spacing-inline-right-misc-a">Birds</span>

    <p>
      The grey shows a margin right using the misc "b" spacing of 40px.
    </p>
    <span class="sb-spacing-inline-right-misc-b">Cats</span><span class="sb-spacing-inline-right-misc-b">Dogs</span><span class="sb-spacing-inline-right-misc-b">Birds</span>

    <p>
      The grey shows a margin right using the misc "c" spacing of 48px.
    </p>
    <span class="sb-spacing-inline-right-misc-c">Cats</span><span class="sb-spacing-inline-right-misc-c">Dogs</span><span class="sb-spacing-inline-right-misc-c">Birds</span>

    <p>
      The grey shows a margin right using the misc "d" spacing of 80px.
    </p>
    <span class="sb-spacing-inline-right-misc-d">Cats</span><span class="sb-spacing-inline-right-misc-d">Dogs</span><span class="sb-spacing-inline-right-misc-d">Birds</span>
  `
);

inlineSpacingMisc.story = {
  name: 'Misc',
};
