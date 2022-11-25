# Overview

**The IaC framework to build cloud infrastructure faster.**

Version 0.1 | October 2022

## Overview

![OpenFABR CDF](../assets/2022-11-16-17-37-04.png)

OpenFABR CDF aims to establish a framework for developing cloud infrastructure, meeting application developers where they are. This means the spec and implementation optimise for what application developers are familiar with. It intentionally leaves out the low-level details such as choices for cloud vendors, individual services offered by vendors and relations between those services. These low-level details are to be implemented mostly by Package Authors.

In other words, OpenFABR CDF as a framework does not have any opinions on how the underlying cloud infrastructure should be defined, which results in the definition at this level being independent of cloud vendor/service/dependency choices, i.e. based on a static architectural view. It offers users a consistent experience when using OpenFABR CDF to design cloud infrastructure, not dissimilar to assembling LEGO bricks.

On the other hand, depending on which implementation is used, the underlying architecture at the cloud vendor level can be very different, as a result of the corresponding Package Author expressing their opinions. Therefore, another set of specifications is required to help Package Authors package their implementations which are then paired together with the language layer for users to access.

As a specification document, it will start by defining common types, constraints, and concepts, and explain the reference implementation. Finally, explain the implementation through the lens of the two personas and give some worked examples to demonstrate how both layers work together end-to-end.

- [Situation](situation.md)
- [Goal](goal.md)
- [Guiding Principles](guiding-principles.md)
- [Framework Spec](framework-spec.md)
- [Framework Implementation](framework-implementation.md)
- [Package Implementation](package-implementation.md)
- [Iac Runtime Entry Point](iac-runtime-entry-point.md)
- [Persona Perspectives](persona-perspectives.md)
- [Implementation Details](implementation-details.md)
- [FAQ](faq.md)
