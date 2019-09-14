import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './components';

const routes: Routes = [{ path: '', component: ObservablesComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
