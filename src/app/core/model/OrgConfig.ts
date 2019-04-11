import { HierarchyNode } from 'src/app/core/model/HierarchyNode';

export interface OrgConfig {
  headline: string;
  text: string;
  nodes: HierarchyNode[];
}
