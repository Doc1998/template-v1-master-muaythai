import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingComponent } from "./landing/landing.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReviewsComponent } from "./reviews/reviews.component";

const routes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
