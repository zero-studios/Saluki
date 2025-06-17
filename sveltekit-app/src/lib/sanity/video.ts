import { getFileAsset } from '@sanity/asset-utils';
import {
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
} from '$env/static/public';

export function fileAssetFor(asset: { _type: string; _ref: string }): {url: string} {
	return getFileAsset(asset, {
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET,
	})
}