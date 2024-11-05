
**Development Plan**

**Objective:**
Enable the `create codeline` command to support an optional Slack channel parameter, allowing messages to be directed to a specific group, such as `configuration_team`.

**Command Format:**
The command format we want to enable is as follows:

    create codeline [New Release] for [Project] based on [Previous Release]

with the option to add further parameters to specify Slack channels or options. This allows us to direct messages to a specific Slack group if needed.

### Approach

To achieve this, we modified the initial regex pattern for the `create codeline` command as follows:

    ValidHandles = RegexHandle.For(@"(?:Teamcity |TC )?create codeline (?<name>[^\s]*) for (?<project>[^\s]*)?(?: based on (?<based>[^\s]*))?(?: (?<option>(?!send\b)[^\s]*))?(?: send to (?<channel>[^\s]*))?");

**Previous Regex Pattern:**
    ValidHandles = RegexHandle.For(@"(?:Teamcity |TC )?create codeline (?<name>[^\s]*) for (?<project>[^\s]*)?( based on )?(?<based>[^\s]*) ?(?<option>[^\s]*)");

The updated regex pattern now includes an optional `channel` parameter, allowing us to specify a Slack channel to send the message to if needed.

### Code Example:
We use the following code to check if a `channel` value is provided and, if so, send the message to that channel:

```csharp
if (!string.IsNullOrEmpty(channel))
{
    message.Channel = channel;
    yield return message.ReplyToChannel(returnMessage);
}
```

### Supported Scenarios

The new regex pattern supports the following command formats:

1. `create codeline [New Release] for [Project] based on [Previous Release]`
2. `create codeline [New Release] for [Project] based on [Previous Release] [Options]`
3. `create codeline [New Release] for [Project] based on [Previous Release] send to [Channel]`

This plan ensures the command’s flexibility, enabling it to adapt to various scenarios, with optional parameters such as `Options` and `Channel` included as needed.
