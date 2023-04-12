import { Module } from "@nestjs/common";
import { ProjectModuleBase } from "./base/project.module.base";
import { ProjectService } from "./project.service";

@Module({
  imports: [ProjectModuleBase],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
