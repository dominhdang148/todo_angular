import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule, TaskModule],
  exports: [MainLayoutComponent],
})
export class LayoutsModule {}
