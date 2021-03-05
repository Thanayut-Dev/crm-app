import { NgModule } from '@angular/core';
import { TableFieldDirective } from './table.field.directive';
import { FusePerfectScrollbarDirective } from './fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseIfOnDomDirective } from './fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseMatSidenavHelperDirective, FuseMatSidenavTogglerDirective } from './fuse-mat-sidenav/fuse-mat-sidenav.directive';
import { FuseInnerScrollDirective } from './fuse-inner-scroll/fuse-inner-scroll.directive';


@NgModule({
  declarations: [
    TableFieldDirective,
    FusePerfectScrollbarDirective,
    FuseIfOnDomDirective,
    FuseInnerScrollDirective,
    FuseMatSidenavHelperDirective,
    FuseMatSidenavTogglerDirective,
  ],
  imports: [],
  exports: [
    TableFieldDirective,
    FusePerfectScrollbarDirective
  ]
})
export class DirectivesModule {
}
