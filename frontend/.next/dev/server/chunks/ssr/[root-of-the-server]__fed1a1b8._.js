module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/utils/github/app.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/github/app.ts
__turbopack_context__.s([
    "checkRepoAccess",
    ()=>checkRepoAccess,
    "getInstallationByAccount",
    ()=>getInstallationByAccount,
    "getInstallationToken",
    ()=>getInstallationToken,
    "githubApp",
    ()=>githubApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$octokit$2f$app$2f$dist$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@octokit/app/dist-node/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
// Initialize GitHub App
const privateKey = process.env.GITHUB_APP_PRIVATE_KEY_PATH ? __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(process.env.GITHUB_APP_PRIVATE_KEY_PATH, "utf8") : process.env.GITHUB_APP_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
const githubApp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$octokit$2f$app$2f$dist$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["App"]({
    appId: ("TURBOPACK compile-time value", "Iv23litfJ1TvXcJhWxUw"),
    privateKey,
    oauth: {
        clientId: process.env.GITHUB_APP_CLIENT_ID,
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET
    }
});
async function getInstallationToken(installationId) {
    const octokit = await githubApp.getInstallationOctokit(installationId);
    const { data } = await octokit.request("POST /app/installations/{installation_id}/access_tokens", {
        installation_id: installationId
    });
    return data.token;
}
async function getInstallationByAccount(accountLogin) {
    try {
        const octokit = await githubApp.octokit;
        const { data: installation } = await octokit.request("GET /users/{username}/installation", {
            username: accountLogin
        });
        return installation;
    } catch (error) {
        return null;
    }
}
async function checkRepoAccess(installationId, owner, repo) {
    try {
        const octokit = await githubApp.getInstallationOctokit(installationId);
        await octokit.request("GET /repos/{owner}/{repo}", {
            owner,
            repo
        });
        return true;
    } catch (error) {
        return false;
    }
}
}),
"[project]/src/lib/services/gitProviderService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40a8bbbeec1a0de06ef2a2f8866ee98ae18289f1cb":"fetchGitLabProjects","60e5df10ac72562d0398b50d8fc4ded4069463f0b0":"importGitLabProjects","705ec2c797cc2f2d776a9d580e778e82f4dec3dc20":"verifyGithubRepoAccess","70aaf5995489f70c81a689a0268bd5f4d0fec2690e":"verifyGitLabRepoAccess"},"",""] */ __turbopack_context__.s([
    "fetchGitLabProjects",
    ()=>fetchGitLabProjects,
    "importGitLabProjects",
    ()=>importGitLabProjects,
    "verifyGitLabRepoAccess",
    ()=>verifyGitLabRepoAccess,
    "verifyGithubRepoAccess",
    ()=>verifyGithubRepoAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$github$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/github/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function verifyGithubRepoAccess(installation_id, owner, repo) {
    try {
        //convert installation_id to number
        const installationId = parseInt(installation_id, 10);
        const octokit = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$github$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["githubApp"].getInstallationOctokit(installationId);
        await octokit.request("GET /repos/{owner}/{repo}", {
            owner,
            repo
        });
        return true;
    } catch (error) {
        if (error instanceof Error && "status" in error && error.status === 404) {
            return false;
        }
        throw error;
    }
}
async function verifyGitLabRepoAccess(access_token, owner, name) {
    try {
        const response = await fetch(`https://gitlab.com/api/v4/projects/${owner}/${name}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return response.ok;
    } catch (error) {
        if (error instanceof Error && "status" in error && error.status === 404) {
            return false;
        }
        throw error;
    }
}
async function fetchGitLabProjects(access_token) {
    try {
        // Fetch user's projects with membership (owned and member)
        const response = await fetch("https://gitlab.com/api/v4/projects?membership=true&per_page=100&simple=true&order_by=last_activity_at&sort=desc", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        if (!response.ok) {
            throw new Error(`GitLab API error: ${response.statusText}`);
        }
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error("Failed to fetch GitLab projects:", error);
        throw error;
    }
}
async function importGitLabProjects(projects, orgId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not found"
        };
    }
    const { data: installation, error: installationError } = await supabase.from("gitlab_installations").select("*").eq("installed_by", user.id).single();
    if (installationError || !installation) {
        console.error("Failed to fetch GitLab installation:", installationError);
        return {
            success: false,
            error: "GitLab installation not found"
        };
    }
    const importedRepos = [];
    const errors = [];
    for (const project of projects){
        try {
            // Verify access to the project by fetching it from GitLab API
            const verifyResponse = await fetch(`https://gitlab.com/api/v4/projects/${project.id}`, {
                headers: {
                    Authorization: `Bearer ${installation.access_token}`
                }
            });
            if (!verifyResponse.ok) {
                errors.push(`Failed to verify access to ${project.path_with_namespace}`);
                continue;
            }
            // Check if repository already exists
            const { data: existingRepo } = await supabase.from("repositories").select("*").eq("organization_id", orgId).eq("repo_url", project.web_url).single();
            if (existingRepo) {
                console.log(`Repository ${project.path_with_namespace} already exists, skipping`);
                continue;
            }
            // Insert repository into database
            const { data: repo, error: insertError } = await supabase.from("repositories").insert({
                name: project.name,
                provider: "gitlab",
                repo_url: project.web_url,
                organization_id: orgId,
                indexed_by: user.id,
                index_status: "not indexed"
            }).select().single();
            if (insertError) {
                console.error(`Failed to insert ${project.path_with_namespace}:`, insertError);
                errors.push(`Failed to import ${project.path_with_namespace}`);
                continue;
            }
            importedRepos.push(repo);
        } catch (error) {
            console.error(`Error processing ${project.path_with_namespace}:`, error);
            errors.push(`Error processing ${project.path_with_namespace}: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }
    // Return success even if no new repos were imported (they might all be duplicates)
    // Only include error information if there were actual failures
    if (errors.length > 0) {
        console.warn("Some repositories failed to import:", errors.join(", "));
    }
    return {
        success: true,
        data: importedRepos
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    verifyGithubRepoAccess,
    verifyGitLabRepoAccess,
    fetchGitLabProjects,
    importGitLabProjects
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyGithubRepoAccess, "705ec2c797cc2f2d776a9d580e778e82f4dec3dc20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyGitLabRepoAccess, "70aaf5995489f70c81a689a0268bd5f4d0fec2690e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchGitLabProjects, "40a8bbbeec1a0de06ef2a2f8866ee98ae18289f1cb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importGitLabProjects, "60e5df10ac72562d0398b50d8fc4ded4069463f0b0", null);
}),
"[project]/src/lib/services/repoService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400db6ea304681407a6ffd627cbcd0a8a8d67d75ee":"indexRepository","401aaf8803662d813cec876ec90d3dbc7c01409ec9":"getRepoWithStatus","402a12e2aa2d46f9eabc580e53a6e0453753249370":"getDocumentationVersions","40352f531d61849c10df43580aa6262b1af019a742":"getConversationMessages","403d930b5e9a84745342c04bbda54c8c3998417372":"getLatestDocumentation","4044cf5706298fdee41c81a599039b132a933acc86":"triggerReindex","405a4bbf14e4200acbd83cc24bedcf2fe219964b16":"getDocumentation","4065b0503ce9290675e57601ee35a62c4806172f7f":"deleteCodeSnippet","40958df3514914f5feabd513008732bf17890f3905":"getDocPages","40a7ea579223d56b5a5ab3416ea9bc8be2144dd932":"getDocPagesHierarchical","40ab2349c1cd14b0c07d21948eb7a0ecab8c32640e":"deleteConversation","40cb284ecf7c75319a51cd3a4731a14624db3e7da3":"getDocPageById","40cc2b5ffdb2eb3caf9ee90ff3a94c10d7c942cdb1":"getReposByOrganizationId","40d1550fbe4b953e3872a6997b223be8c5a31b3c8e":"getConversationById","40d5d7f1541771974a85822138d8392e71a113b731":"deleteRepo","40ed009f0d51ce94fba83d54c82de57036f3853add":"getCodeSnippetsForConversation","601fa169b11b6973375eb8e0dcc1c5621f47916013":"getDocPagesForVersion","60643372855cfab10bfd1823b863d83223059f2570":"renameConversation","6072a3738e84272d52473f8c41b95025253f0233e1":"createRepoViaGithub","60d47ca7668eae22c2d601af18f33d54c4ab50b6f6":"createRepoViaLocalFile","60d724809b3734604c7e62a95feab43ddc4ede7a6d":"updateRepoSettings","60da381c553470c3cbe4d265dd4a59642b8cfbb360":"createRepoViaGitlab","7035655e9eff45fe03e6f78297bf8a12121969e07a":"saveCodeSnippets","705308f3cacbf0c56038f0d34b9ad3b7e1087a50f1":"createMessage","7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec":"getConversations","70eec9e0c5d7ed97577df4f40b75aa69e197b3acc7":"createConversation"},"",""] */ __turbopack_context__.s([
    "createConversation",
    ()=>createConversation,
    "createMessage",
    ()=>createMessage,
    "createRepoViaGithub",
    ()=>createRepoViaGithub,
    "createRepoViaGitlab",
    ()=>createRepoViaGitlab,
    "createRepoViaLocalFile",
    ()=>createRepoViaLocalFile,
    "deleteCodeSnippet",
    ()=>deleteCodeSnippet,
    "deleteConversation",
    ()=>deleteConversation,
    "deleteRepo",
    ()=>deleteRepo,
    "getCodeSnippetsForConversation",
    ()=>getCodeSnippetsForConversation,
    "getConversationById",
    ()=>getConversationById,
    "getConversationMessages",
    ()=>getConversationMessages,
    "getConversations",
    ()=>getConversations,
    "getDocPageById",
    ()=>getDocPageById,
    "getDocPages",
    ()=>getDocPages,
    "getDocPagesForVersion",
    ()=>getDocPagesForVersion,
    "getDocPagesHierarchical",
    ()=>getDocPagesHierarchical,
    "getDocumentation",
    ()=>getDocumentation,
    "getDocumentationVersions",
    ()=>getDocumentationVersions,
    "getLatestDocumentation",
    ()=>getLatestDocumentation,
    "getRepoWithStatus",
    ()=>getRepoWithStatus,
    "getReposByOrganizationId",
    ()=>getReposByOrganizationId,
    "indexRepository",
    ()=>indexRepository,
    "renameConversation",
    ()=>renameConversation,
    "saveCodeSnippets",
    ()=>saveCodeSnippets,
    "triggerReindex",
    ()=>triggerReindex,
    "updateRepoSettings",
    ()=>updateRepoSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$gitProviderService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/gitProviderService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// Helper function to parse GitHub URLs
function parseGitHubUrl(url) {
    try {
        // Handle multiple formats:
        // - https://github.com/owner/repo
        // - https://github.com/owner/repo.git
        // - git@github.com:owner/repo.git
        url = url.trim().replace(/\.git$/, "");
        if (url.includes("github.com/")) {
            const parts = url.split("github.com/")[1].split("/");
            return {
                owner: parts[0],
                repo: parts[1]
            };
        }
        if (url.startsWith("git@github.com:")) {
            const parts = url.replace("git@github.com:", "").split("/");
            return {
                owner: parts[0],
                repo: parts[1]
            };
        }
        return {
            owner: "",
            repo: ""
        };
    } catch (error) {
        return {
            owner: "",
            repo: ""
        };
    }
}
// Helper function to parse GitLab URLs
function parseGitLabUrl(url) {
    try {
        // Handle multiple formats:
        // - https://gitlab.com/owner/repo
        // - https://gitlab.com/owner/subgroup/repo
        // - https://gitlab.com/owner/repo.git
        // - git@gitlab.com:owner/repo.git
        // - Self-hosted: https://gitlab.example.com/owner/repo
        url = url.trim().replace(/\.git$/, "");
        // Handle HTTPS URLs (gitlab.com or self-hosted)
        if (url.includes("gitlab.com/") || /gitlab\.[^/]+\//.test(url)) {
            // Extract the path after the domain
            const match = url.match(/gitlab[^/]*\/(.+)/);
            if (match) {
                const pathParts = match[1].split("/");
                // GitLab supports nested groups, so we need to handle:
                // - owner/repo (2 parts)
                // - owner/subgroup/repo (3+ parts)
                if (pathParts.length >= 2) {
                    // Take everything except the last part as owner/group
                    const repo = pathParts[pathParts.length - 1];
                    const owner = pathParts.slice(0, -1).join("/");
                    return {
                        owner,
                        repo
                    };
                }
            }
        }
        // Handle SSH URLs
        if (url.startsWith("git@gitlab.com:") || /git@gitlab\.[^:]+:/.test(url)) {
            const match = url.match(/git@gitlab[^:]*:(.+)/);
            if (match) {
                const pathParts = match[1].split("/");
                if (pathParts.length >= 2) {
                    const repo = pathParts[pathParts.length - 1];
                    const owner = pathParts.slice(0, -1).join("/");
                    return {
                        owner,
                        repo
                    };
                }
            }
        }
        return {
            owner: "",
            repo: ""
        };
    } catch (error) {
        return {
            owner: "",
            repo: ""
        };
    }
}
async function getReposByOrganizationId(organizationId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const user = client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data, error } = await client.from("repositories").select("*").eq("organization_id", organizationId);
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: data ?? []
    };
}
async function createRepoViaGithub(formData, orgId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const name = formData.get("name");
    const provider = formData.get("type");
    const url = formData.get("github-url");
    if (!name) {
        return {
            success: false,
            error: "Name is required!"
        };
    }
    const { data: installation } = await client.from("github_installations").select("*").eq("installed_by", user.id).single();
    if (!installation) {
        // No GitHub App installation - prompt user to install
        return {
            success: false,
            error: "Installation Needed"
        };
    }
    //parse url for owner and repo
    const { owner, repo: repoName } = parseGitHubUrl(url);
    const hasAccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$gitProviderService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyGithubRepoAccess"])(installation.installation_id, owner, repoName);
    if (!hasAccess) {
        return {
            success: false,
            error: "Access Denied"
        };
    }
    const { data: repo, error: repoError } = await client.from("repositories").insert({
        name,
        provider,
        repo_url: url,
        organization_id: orgId,
        indexed_by: user.id,
        index_status: "not indexed"
    }).select().single();
    if (repoError) {
        return {
            success: false,
            error: repoError.message
        };
    }
    return {
        success: true,
        data: repo
    };
}
async function createRepoViaGitlab(formData, orgId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const name = formData.get("name");
    const provider = formData.get("type");
    const url = formData.get("gitlab-url");
    // Validate inputs
    if (!name || name.trim() === "") {
        return {
            success: false,
            error: "Repository name is required"
        };
    }
    if (!url || url.trim() === "") {
        return {
            success: false,
            error: "GitLab URL is required"
        };
    }
    const { data: installation } = await client.from("gitlab_installations").select("*").eq("installed_by", user.id).single();
    if (!installation) {
        return {
            success: false,
            error: "Installation Needed"
        };
    }
    const { owner, repo: repoName } = parseGitLabUrl(url);
    //verify access
    const hasAccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$gitProviderService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyGitLabRepoAccess"])(installation.access_token, owner, repoName);
    if (!hasAccess) {
        if (installation.access_token) {
            return {
                success: false,
                error: "Access required!"
            };
        }
        return {
            success: false,
            error: "Access denied!"
        };
    }
    const { data: repo, error: repoError } = await client.from("repositories").insert({
        name,
        provider,
        repo_url: url,
        organization_id: orgId,
        indexed_by: user.id,
        index_status: "not indexed"
    }).select().single();
    if (repoError) {
        return {
            success: false,
            error: repoError.message
        };
    }
    return {
        success: true,
        data: repo
    };
}
async function createRepoViaLocalFile(formData, orgId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const name = formData.get("name");
    const file = formData.get("file");
    // Validate inputs
    if (!name || name.trim() === "") {
        return {
            success: false,
            error: "Repository name is required"
        };
    }
    if (!file) {
        return {
            success: false,
            error: "File is required"
        };
    }
    // Validate file type
    if (!file.name.endsWith(".zip")) {
        return {
            success: false,
            error: "Only .zip files are allowed"
        };
    }
    // Validate file size (max 100MB)
    const maxSize = 100 * 1024 * 1024; // 100MB in bytes
    if (file.size > maxSize) {
        return {
            success: false,
            error: "File size exceeds 100MB limit"
        };
    }
    try {
        // Generate a unique file name to prevent collisions
        const timestamp = Date.now();
        const sanitizedName = name.trim().replace(/[^a-z0-9-_]/gi, "_");
        const fileName = `${sanitizedName}_${timestamp}_${file.name}`;
        const filePath = `${orgId}/${fileName}`;
        // Upload file to Supabase Storage
        const { error: uploadError } = await client.storage.from("local_repos").upload(filePath, file, {
            contentType: "application/zip",
            upsert: false
        });
        if (uploadError) {
            console.error("Upload error:", uploadError);
            return {
                success: false,
                error: `File upload failed: ${uploadError.message}`
            };
        }
        // Get the public URL for the uploaded file
        const { data: urlData } = client.storage.from("local_repos").getPublicUrl(filePath);
        // Create repository record in database
        const { data: repo, error: repoError } = await client.from("repositories").insert({
            name: name.trim(),
            provider: "local",
            repo_url: null,
            object_url: urlData.publicUrl,
            organization_id: orgId,
            indexed_by: user.id,
            index_status: "not indexed"
        }).select().single();
        if (repoError) {
            console.error("Repository creation error:", repoError);
            // Attempt to clean up uploaded file
            await client.storage.from("local_repos").remove([
                filePath
            ]);
            return {
                success: false,
                error: `Repository creation failed: ${repoError.message}`
            };
        }
        return {
            success: true,
            data: repo
        };
    } catch (error) {
        console.error("Unexpected error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "An unexpected error occurred"
        };
    }
}
async function getRepoWithStatus(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: repo, error } = await client.from("repositories").select("*").eq("id", repoId).single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    if (!repo) {
        return {
            success: false,
            error: "Repository not found"
        };
    }
    return {
        success: true,
        data: repo
    };
}
async function updateRepoSettings(repoId, settings) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    // Get the current repo to check its provider type
    const { data: currentRepo } = await client.from("repositories").select("*").eq("id", repoId).single();
    if (!currentRepo) {
        return {
            success: false,
            error: "Repository not found!"
        };
    }
    const updateData = {};
    // Handle name update
    if (settings.name) {
        updateData.name = settings.name;
    }
    // Handle GitHub URL update
    if (settings.repo_url && currentRepo.provider === "github") {
        const { owner, repo } = parseGitHubUrl(settings.repo_url);
        if (!owner || !repo) {
            return {
                success: false,
                error: "Invalid GitHub URL format!"
            };
        }
        // Verify access to the new repo
        const { data: installation } = await client.from("github_installations").select("*").eq("installed_by", user.id).single();
        if (!installation) {
            return {
                success: false,
                error: "GitHub App not installed!"
            };
        }
        const hasAccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$gitProviderService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyGithubRepoAccess"])(installation.installation_id.toString(), owner, repo);
        if (!hasAccess) {
            return {
                success: false,
                error: "Cannot access this repository. Make sure the GitHub App is installed for this repository."
            };
        }
        updateData.repo_url = settings.repo_url;
        updateData.index_status = "not indexed"; // Trigger re-indexing
    }
    // Handle local file upload
    if (settings.file && currentRepo.provider === "local") {
        const file = settings.file;
        const fileExt = file.name.split(".").pop();
        if (fileExt !== "zip") {
            return {
                success: false,
                error: "Only .zip files are allowed!"
            };
        }
        // Upload to Supabase Storage
        const fileName = `${repoId}-${Date.now()}.zip`;
        const { data: uploadData, error: uploadError } = await client.storage.from("local_repos").upload(fileName, file);
        if (uploadError) {
            console.error(uploadError);
            return {
                success: false,
                error: "Failed to upload file!"
            };
        }
        // Get public URL
        const { data: urlData } = client.storage.from("local_repos").getPublicUrl(fileName);
        updateData.object_url = urlData.publicUrl;
        updateData.index_status = "pending"; // Trigger re-indexing
    }
    // Update the repository
    const { data: repo, error } = await client.from("repositories").update(updateData).eq("id", repoId).select().single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: repo
    };
}
async function deleteRepo(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    // Fetch the organization_id before deleting
    const { data: repo, error: repoError } = await client.from("repositories").select("organization_id").eq("id", repoId).single();
    if (repoError) {
        console.error(repoError);
        return {
            success: false,
            error: repoError.message
        };
    }
    if (!repo) {
        return {
            success: false,
            error: "Repository not found"
        };
    }
    const { error } = await client.from("repositories").delete().eq("id", repoId);
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: {
            organizationId: repo.organization_id
        }
    };
}
async function triggerReindex(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    // Update the index_status to 'pending' to trigger reindexing
    const { error } = await client.from("repositories").update({
        index_status: "pending"
    }).eq("id", repoId);
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    // TODO: Trigger actual indexing job/webhook/queue here
    // This could be an API call to your indexing service
    return {
        success: true,
        data: undefined
    };
}
async function getDocumentation(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: documentation, error } = await client.from("documentation").select("*").eq("repo_id", repoId).single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    if (!documentation) {
        return {
            success: false,
            error: "Documentation not found"
        };
    }
    return {
        success: true,
        data: documentation
    };
}
async function getDocPages(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    // Get the latest documentation version for this repo
    const { data: documentation, error: docError } = await client.from("documentation").select("id").eq("repo_id", repoId).order("version", {
        ascending: false
    }).limit(1).single();
    if (docError || !documentation) {
        console.error(docError);
        return {
            success: false,
            error: "Documentation not found"
        };
    }
    const { data: pages, error } = await client.from("pages").select("*").eq("documentation_id", documentation.id).order("order_index", {
        ascending: true
    });
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: pages ?? []
    };
}
async function getDocPageById(pageId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: page, error } = await client.from("doc_pages").select("*").eq("id", pageId).single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    if (!page) {
        return {
            success: false,
            error: "Page not found"
        };
    }
    return {
        success: true,
        data: page
    };
}
async function getDocPagesHierarchical(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    // First get the documentation ID for this repo
    const { data: documentation, error: docError } = await client.from("documentation").select("id").eq("repo_id", repoId).single();
    if (docError || !documentation) {
        console.error(docError);
        return {
            success: false,
            error: "Documentation not found"
        };
    }
    const { data: pages, error } = await client.from("doc_pages").select("*").eq("documentation_id", documentation.id).order("order_index", {
        ascending: true
    });
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    // Pages are already sorted by order_index
    // The parent_page_id field maintains the hierarchy
    // Frontend can use this to render the tree structure
    return {
        success: true,
        data: pages ?? []
    };
}
async function getDocumentationVersions(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: versions, error } = await client.from("documentation").select("*").eq("repo_id", repoId).order("version", {
        ascending: false
    });
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: versions ?? []
    };
}
async function getLatestDocumentation(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: documentation, error } = await client.from("documentation").select("*").eq("repo_id", repoId).order("version", {
        ascending: false
    }).limit(1).single();
    if (!documentation) {
        return {
            success: false,
            error: "Documentation not found"
        };
    }
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: documentation
    };
}
async function getDocPagesForVersion(repoId, version) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    // Get the documentation record for this version
    const { data: documentation, error: docError } = await client.from("documentation").select("id").eq("repo_id", repoId).eq("version", version).single();
    if (docError || !documentation) {
        return {
            success: false,
            error: "Documentation version not found"
        };
    }
    const { data: pages, error } = await client.from("pages").select("*").eq("documentation_id", documentation.id).order("order_index", {
        ascending: true
    });
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: pages ?? []
    };
}
async function getConversations(repoId, limit = 20, version = null) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    let query = client.from("conversations").select("*").eq("repo_id", repoId).eq("user_id", user.id);
    // Filter by version if specified
    if (version !== null && version !== undefined) {
        query = query.eq("repo_version", version);
    }
    const { data: conversations, error } = await query.order("updated_at", {
        ascending: false
    }).limit(limit);
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: conversations ?? []
    };
}
async function getConversationById(conversationId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: conversation, error } = await client.from("conversations").select("*").eq("id", conversationId).eq("user_id", user.id).single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    if (!conversation) {
        return {
            success: false,
            error: "Conversation not found"
        };
    }
    return {
        success: true,
        data: conversation
    };
}
async function createConversation(repoId, title, version) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: conversation, error } = await client.from("conversations").insert({
        repo_id: repoId,
        user_id: user.id,
        title: title || "New Conversation",
        repo_version: version ?? null
    }).select().single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: conversation
    };
}
async function deleteConversation(conversationId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { error } = await client.from("conversations").delete().eq("id", conversationId).eq("user_id", user.id);
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: undefined
    };
}
async function renameConversation(conversationId, newTitle) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: conversation, error } = await client.from("conversations").update({
        title: newTitle
    }).eq("id", conversationId).eq("user_id", user.id).select().single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: conversation
    };
}
async function getConversationMessages(conversationId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: messages, error } = await client.from("messages").select("*").eq("conversation_id", conversationId).order("created_at", {
        ascending: true
    });
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: messages ?? []
    };
}
async function createMessage(conversationId, role, content) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: message, error } = await client.from("messages").insert({
        conversation_id: conversationId,
        role,
        content
    }).select().single();
    if (error) {
        console.error(error);
        return {
            success: false,
            error: error.message
        };
    }
    // Update the conversation's updated_at timestamp
    await client.from("conversations").update({
        updated_at: new Date().toISOString()
    }).eq("id", conversationId);
    return {
        success: true,
        data: message
    };
}
async function saveCodeSnippets(conversationId, messageId, snippets) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const snippetsToInsert = snippets.map((snippet)=>({
            conversation_id: conversationId,
            message_id: messageId,
            file_path: snippet.file,
            code_content: snippet.code,
            language: snippet.file.split(".").pop() || null
        }));
    const { data, error } = await supabase.from("code_snippets").insert(snippetsToInsert).select();
    if (error) {
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: data
    };
}
async function getCodeSnippetsForConversation(conversationId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from("code_snippets").select("*").eq("conversation_id", conversationId).order("created_at", {
        ascending: false
    });
    if (error) {
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: data
    };
}
async function deleteCodeSnippet(snippetId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from("code_snippets").delete().eq("id", snippetId);
    if (error) {
        return {
            success: false,
            error: error.message
        };
    }
    return {
        success: true,
        data: null
    };
}
async function indexRepository(repoId) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    const { data: installation, error: installationError } = await client.from("github_installations").select("*").eq("installed_by", user.id).single();
    if (!installation || installationError) {
        return {
            success: false,
            error: "Github App Installation not found!"
        };
    }
    //fetch repo
    const repoResult = await getRepoWithStatus(repoId);
    if (!repoResult.success) {
        return {
            success: false,
            error: repoResult.error
        };
    }
    const repoUrl = repoResult.data.repo_url;
    const installationId = installation.installation_id;
    // Get the latest version number for this repo
    const { data: latestDoc } = await client.from("documentation").select("version").eq("repo_id", repoId).order("version", {
        ascending: false
    }).limit(1).single();
    // Increment version (start at 1 if no previous versions)
    const nextVersion = (latestDoc?.version ?? 0) + 1;
    //mark the repository as indexing in supabase first
    const { error: updateError } = await client.from("repositories").update({
        index_status: "indexing"
    }).eq("id", repoId);
    if (updateError) {
        console.error(updateError);
        return {
            success: false,
            error: updateError.message
        };
    }
    // Call the backend to start indexing (fire-and-forget)
    // Don't await or throw errors since this is a long-running operation
    fetch(`${process.env.BACKEND_URL}/repos/index`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            repo_url: repoUrl,
            repo_id: repoId,
            user_id: user.id,
            installation_id: installationId,
            branch: "main",
            version: nextVersion
        })
    }).catch((error)=>{
        // Log the error but don't fail the request
        console.error("Indexing request failed:", error);
    // The backend should handle updating the repo status on failure
    });
    // Return success immediately - the indexing will happen in the background
    return {
        success: true,
        data: undefined
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getReposByOrganizationId,
    createRepoViaGithub,
    createRepoViaGitlab,
    createRepoViaLocalFile,
    getRepoWithStatus,
    updateRepoSettings,
    deleteRepo,
    triggerReindex,
    getDocumentation,
    getDocPages,
    getDocPageById,
    getDocPagesHierarchical,
    getDocumentationVersions,
    getLatestDocumentation,
    getDocPagesForVersion,
    getConversations,
    getConversationById,
    createConversation,
    deleteConversation,
    renameConversation,
    getConversationMessages,
    createMessage,
    saveCodeSnippets,
    getCodeSnippetsForConversation,
    deleteCodeSnippet,
    indexRepository
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReposByOrganizationId, "40cc2b5ffdb2eb3caf9ee90ff3a94c10d7c942cdb1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRepoViaGithub, "6072a3738e84272d52473f8c41b95025253f0233e1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRepoViaGitlab, "60da381c553470c3cbe4d265dd4a59642b8cfbb360", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRepoViaLocalFile, "60d47ca7668eae22c2d601af18f33d54c4ab50b6f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRepoWithStatus, "401aaf8803662d813cec876ec90d3dbc7c01409ec9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateRepoSettings, "60d724809b3734604c7e62a95feab43ddc4ede7a6d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteRepo, "40d5d7f1541771974a85822138d8392e71a113b731", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(triggerReindex, "4044cf5706298fdee41c81a599039b132a933acc86", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocumentation, "405a4bbf14e4200acbd83cc24bedcf2fe219964b16", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocPages, "40958df3514914f5feabd513008732bf17890f3905", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocPageById, "40cb284ecf7c75319a51cd3a4731a14624db3e7da3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocPagesHierarchical, "40a7ea579223d56b5a5ab3416ea9bc8be2144dd932", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocumentationVersions, "402a12e2aa2d46f9eabc580e53a6e0453753249370", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLatestDocumentation, "403d930b5e9a84745342c04bbda54c8c3998417372", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDocPagesForVersion, "601fa169b11b6973375eb8e0dcc1c5621f47916013", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getConversations, "7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getConversationById, "40d1550fbe4b953e3872a6997b223be8c5a31b3c8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createConversation, "70eec9e0c5d7ed97577df4f40b75aa69e197b3acc7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteConversation, "40ab2349c1cd14b0c07d21948eb7a0ecab8c32640e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameConversation, "60643372855cfab10bfd1823b863d83223059f2570", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getConversationMessages, "40352f531d61849c10df43580aa6262b1af019a742", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createMessage, "705308f3cacbf0c56038f0d34b9ad3b7e1087a50f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveCodeSnippets, "7035655e9eff45fe03e6f78297bf8a12121969e07a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCodeSnippetsForConversation, "40ed009f0d51ce94fba83d54c82de57036f3853add", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCodeSnippet, "4065b0503ce9290675e57601ee35a62c4806172f7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(indexRepository, "400db6ea304681407a6ffd627cbcd0a8a8d67d75ee", null);
}),
"[project]/src/lib/services/orgService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00cf799b7e33e195f9c981a2d6415affaee12298e5":"getOrgs","4025d49eda10549d289fc3c9e48b2e79be499fe7c3":"leaveOrganization","40719b7c30dca7e23375ec36f8f3b3293d26eab284":"getOrgMembers","4089b6bcd743de107f06788e9db127449539652543":"acceptInvite","40adf607652bcf9f8bd9b5adc84b32fe5fa2f9e66d":"createInviteLink","40daa9c9a31e4b9e3f17ba924ae68919c41650a3af":"createOrg","40fff36bbf491c3923e9f4e9bdecd9f8626f782920":"getOrgById","6018943c8b2808bc23660030a1e0d61a4809b3fe4a":"removeMemberFromOrg","7099ea3828eb11e4401363e029e0150399ff6c6705":"updateMemberRole"},"",""] */ __turbopack_context__.s([
    "acceptInvite",
    ()=>acceptInvite,
    "createInviteLink",
    ()=>createInviteLink,
    "createOrg",
    ()=>createOrg,
    "getOrgById",
    ()=>getOrgById,
    "getOrgMembers",
    ()=>getOrgMembers,
    "getOrgs",
    ()=>getOrgs,
    "leaveOrganization",
    ()=>leaveOrganization,
    "removeMemberFromOrg",
    ()=>removeMemberFromOrg,
    "updateMemberRole",
    ()=>updateMemberRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getOrgs() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not found"
        };
    }
    // Query from user_organizations table to properly filter by user_id
    const { data: userOrgs, error: organizationsError } = await supabase.from("user_organizations").select("role,joined_at,organizations(id,name,created_at)").eq("user_id", user.id);
    if (organizationsError) {
        return {
            success: false,
            error: organizationsError.message
        };
    }
    // Transform the data to match OrganizationWithRole structure
    const organizations = (userOrgs ?? []).map((uo)=>{
        const org = uo.organizations;
        // Handle case where organizations might be an array (shouldn't happen with proper FK)
        const orgData = Array.isArray(org) ? org[0] : org;
        return {
            id: orgData.id,
            name: orgData.name,
            created_at: orgData.created_at,
            role: uo.role,
            joined_at: uo.joined_at
        };
    });
    return {
        success: true,
        data: organizations
    };
}
async function getOrgById(orgId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not found"
        };
    }
    const { data: organization, error } = await supabase.from("organizations").select("id,name,created_at").eq("id", orgId).single();
    if (error) {
        return {
            success: false,
            error: error.message
        };
    }
    if (!organization) {
        return {
            success: false,
            error: "Organization not found"
        };
    }
    return {
        success: true,
        data: organization
    };
}
async function getOrgMembers(orgId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated"
        };
    }
    // Verify user has access to this organization
    const { data: userOrg, error: accessError } = await supabase.from("user_organizations").select("organization_id").eq("organization_id", orgId).eq("user_id", user.id).single();
    if (accessError || !userOrg) {
        return {
            success: false,
            error: "Access denied to this organization"
        };
    }
    // Fetch all members of the organization with their user details
    // Join with users table to get email addresses
    const { data: members, error: membersError } = await supabase.from("user_organizations").select("user_id, organization_id, role, joined_at, users(email)").eq("organization_id", orgId).order("joined_at", {
        ascending: true
    });
    if (membersError) {
        return {
            success: false,
            error: membersError.message
        };
    }
    if (!members || members.length === 0) {
        return {
            success: true,
            data: []
        };
    }
    // Transform the joined data to match OrganizationMember type
    const membersWithEmails = members.map((m)=>{
        // Handle the users field which could be an object or array due to the join
        const userData = m.users;
        const email = Array.isArray(userData) ? userData[0]?.email || "Unknown" : userData?.email || "Unknown";
        return {
            user_id: m.user_id,
            organization_id: m.organization_id,
            role: m.role,
            joined_at: m.joined_at,
            user_email: email
        };
    });
    return {
        success: true,
        data: membersWithEmails
    };
}
async function createOrg(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not found"
        };
    }
    const name = formData.get("name");
    if (!name || name.trim() === "") {
        return {
            success: false,
            error: "Organization name is required"
        };
    }
    const { data: organization, error: organizationError } = await supabase.from("organizations").insert({
        name: name.trim()
    }).select().single();
    if (organizationError) {
        return {
            success: false,
            error: organizationError.message
        };
    }
    const { error: userOrganizationError } = await supabase.from("user_organizations").insert({
        user_id: user.id,
        organization_id: organization.id,
        role: "owner"
    }).select().single();
    if (userOrganizationError) {
        return {
            success: false,
            error: userOrganizationError.message
        };
    }
    return {
        success: true,
        data: organization
    };
}
async function createInviteLink(organizationId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    //authenticate user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated!"
        };
    }
    //check membership
    const { data: userOrg, error: accessError } = await supabase.from("user_organizations").select("organization_id, role").eq("organization_id", organizationId).eq("user_id", user.id).single();
    if (accessError || !userOrg) {
        return {
            success: false,
            error: "User does not have access to this organization!"
        };
    }
    //generate a secure token
    const token = crypto.randomUUID();
    //calculate expiry date
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    //store the invite in supa
    const { error: inviteError } = await supabase.from("organization_invites").insert({
        organization_id: organizationId,
        created_by: user.id,
        token,
        expires_at: expiresAt.toISOString()
    });
    if (inviteError) {
        console.error("Failed to create invite:", inviteError);
        return {
            success: false,
            error: "Failed to create invite link"
        };
    }
    return {
        success: true,
        data: {
            token,
            expiresAt: expiresAt.toISOString()
        }
    };
}
async function acceptInvite(token) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Authenticate user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "You must be logged in to accept an invite"
        };
    }
    // 2. Fetch and validate invite (with locking to prevent race conditions)
    const { data: invite, error: inviteError } = await supabase.from("organization_invites").select("*").eq("token", token).is("used_at", null) // Only get unused invites
    .single();
    if (inviteError || !invite) {
        return {
            success: false,
            error: "Invalid or expired invite link"
        };
    }
    // 3. Check expiration
    const now = new Date();
    const expiresAt = new Date(invite.expires_at);
    if (now > expiresAt) {
        return {
            success: false,
            error: "This invite has expired"
        };
    }
    // 4. Check if user is already a member
    const { data: existingMembership } = await supabase.from("user_organizations").select("organization_id").eq("organization_id", invite.organization_id).eq("user_id", user.id).single();
    if (existingMembership) {
        return {
            success: false,
            error: "You are already a member of this organization"
        };
    }
    // 5. Add user to organization
    const { error: membershipError } = await supabase.from("user_organizations").insert({
        user_id: user.id,
        organization_id: invite.organization_id,
        role: "teammate"
    });
    if (membershipError) {
        console.error("Failed to add user to organization:", membershipError);
        return {
            success: false,
            error: "Failed to join organization"
        };
    }
    // 6. Mark invite as used (using admin client with secret key to bypass RLS)
    const adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    const { error: updateError } = await adminClient.from("organization_invites").update({
        used_at: new Date().toISOString(),
        used_by: user.id
    }).eq("token", token);
    if (updateError) {
        console.error("Failed to mark invite as used:", updateError);
    // Don't return error - user was already added successfully
    }
    return {
        success: true,
        data: {
            organizationId: invite.organization_id
        }
    };
}
async function removeMemberFromOrg(organizationId, userIdToRemove) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Authenticate user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated"
        };
    }
    // 2. Verify current user is an owner (RLS will also enforce this)
    const { data: currentUserRole, error: roleError } = await supabase.from("user_organizations").select("role").eq("organization_id", organizationId).eq("user_id", user.id).single();
    if (roleError || !currentUserRole || currentUserRole.role !== "owner") {
        return {
            success: false,
            error: "Only organization owners can remove members"
        };
    }
    // 3. Check if the user being removed is the last owner
    if (userIdToRemove === user.id) {
        const { data: owners, error: ownersError } = await supabase.from("user_organizations").select("user_id").eq("organization_id", organizationId).eq("role", "owner");
        if (ownersError) {
            return {
                success: false,
                error: "Failed to verify ownership status"
            };
        }
        if (owners && owners.length <= 1) {
            return {
                success: false,
                error: "Cannot remove the last owner from the organization"
            };
        }
    }
    // 4. Remove the member (RLS policy will enforce owner permission)
    const { error: deleteError } = await supabase.from("user_organizations").delete().eq("organization_id", organizationId).eq("user_id", userIdToRemove);
    if (deleteError) {
        return {
            success: false,
            error: "Failed to remove member"
        };
    }
    return {
        success: true,
        data: undefined
    };
}
async function leaveOrganization(organizationId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Authenticate user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated"
        };
    }
    // 2. Verify user is a member of this organization
    const { data: membership, error: membershipError } = await supabase.from("user_organizations").select("role").eq("organization_id", organizationId).eq("user_id", user.id).single();
    if (membershipError || !membership) {
        return {
            success: false,
            error: "You are not a member of this organization"
        };
    }
    // 3. If user is an owner, check if they're the last owner
    if (membership.role === "owner") {
        const { data: owners, error: ownersError } = await supabase.from("user_organizations").select("user_id").eq("organization_id", organizationId).eq("role", "owner");
        if (ownersError) {
            return {
                success: false,
                error: "Failed to verify ownership status"
            };
        }
        if (owners && owners.length <= 1) {
            return {
                success: false,
                error: "Cannot leave as the last owner. Transfer ownership first."
            };
        }
    }
    // 4. Remove the user from the organization
    const { error: deleteError } = await supabase.from("user_organizations").delete().eq("organization_id", organizationId).eq("user_id", user.id);
    if (deleteError) {
        return {
            success: false,
            error: "Failed to leave organization"
        };
    }
    return {
        success: true,
        data: undefined
    };
}
async function updateMemberRole(organizationId, userIdToUpdate, newRole) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Authenticate user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            success: false,
            error: "User not authenticated"
        };
    }
    // 2. Verify current user is an owner
    const { data: currentUserRole, error: roleError } = await supabase.from("user_organizations").select("role").eq("organization_id", organizationId).eq("user_id", user.id).single();
    if (roleError || !currentUserRole || currentUserRole.role !== "owner") {
        return {
            success: false,
            error: "Only organization owners can change member roles"
        };
    }
    // 3. Get current role of user being updated
    const { data: targetUser, error: targetError } = await supabase.from("user_organizations").select("role").eq("organization_id", organizationId).eq("user_id", userIdToUpdate).single();
    if (targetError || !targetUser) {
        return {
            success: false,
            error: "Member not found"
        };
    }
    // 4. If demoting from owner to teammate, check if they're the last owner
    if (targetUser.role === "owner" && newRole === "teammate") {
        const { data: owners, error: ownersError } = await supabase.from("user_organizations").select("user_id").eq("organization_id", organizationId).eq("role", "owner");
        if (ownersError) {
            return {
                success: false,
                error: "Failed to verify ownership status"
            };
        }
        if (owners && owners.length <= 1) {
            return {
                success: false,
                error: "Cannot demote the last owner. Promote another member first."
            };
        }
    }
    // 5. Update the role
    const { error: updateError } = await supabase.from("user_organizations").update({
        role: newRole
    }).eq("organization_id", organizationId).eq("user_id", userIdToUpdate);
    if (updateError) {
        return {
            success: false,
            error: "Failed to update member role"
        };
    }
    return {
        success: true,
        data: undefined
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getOrgs,
    getOrgById,
    getOrgMembers,
    createOrg,
    createInviteLink,
    acceptInvite,
    removeMemberFromOrg,
    leaveOrganization,
    updateMemberRole
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrgs, "00cf799b7e33e195f9c981a2d6415affaee12298e5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrgById, "40fff36bbf491c3923e9f4e9bdecd9f8626f782920", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrgMembers, "40719b7c30dca7e23375ec36f8f3b3293d26eab284", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createOrg, "40daa9c9a31e4b9e3f17ba924ae68919c41650a3af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInviteLink, "40adf607652bcf9f8bd9b5adc84b32fe5fa2f9e66d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(acceptInvite, "4089b6bcd743de107f06788e9db127449539652543", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeMemberFromOrg, "6018943c8b2808bc23660030a1e0d61a4809b3fe4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(leaveOrganization, "4025d49eda10549d289fc3c9e48b2e79be499fe7c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateMemberRole, "7099ea3828eb11e4401363e029e0150399ff6c6705", null);
}),
"[project]/.next-internal/server/app/dashboard/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/services/repoService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/services/orgService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$repoService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/repoService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$orgService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/orgService.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/dashboard/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/services/repoService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/services/orgService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40daa9c9a31e4b9e3f17ba924ae68919c41650a3af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$orgService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrg"],
    "7086746f18569372ffa3cfdffc9aa12e4d2f9a0dec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$repoService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConversations"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$services$2f$repoService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$services$2f$orgService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/new/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/services/repoService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/services/orgService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$repoService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/repoService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$orgService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/orgService.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fed1a1b8._.js.map